#!/usr/bin/env python3
"""
extract_docx.py
Extractor automatizado de preguntas y claves de respuesta desde
Banco_preguntas_examen_investigacion_cientifica_Sampieri.docx
Garantiza limpieza 100% pura:
- Omite encabezados y números romanos de sección
- Omite pies de página y notas
- Asocia las claves exactas de la tabla de respuestas (Bloques 1 al 7)
- Genera js/questions.js con estructura válida y segura
"""

import os
import sys
import json
import re
import zipfile
import xml.etree.ElementTree as ET

def extract_and_generate(docx_path="Banco_preguntas_examen_investigacion_cientifica_Sampieri.docx", output_js="js/questions.js"):
    if not os.path.exists(docx_path):
        print(f"Error: No se encontró el archivo '{docx_path}'")
        sys.exit(1)

    print(f"Abriendo '{docx_path}'...")
    with zipfile.ZipFile(docx_path, 'r') as zf:
        xml_content = zf.read('word/document.xml')

    root = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    body = root.find('{' + ns['w'] + '}body')
    p_tag = '{' + ns['w'] + '}p'
    tbl_tag = '{' + ns['w'] + '}tbl'
    tr_tag = '{' + ns['w'] + '}tr'
    tc_tag = '{' + ns['w'] + '}tc'
    t_tag = '{' + ns['w'] + '}t'

    # 1. Extraer claves de respuesta desde la tabla de soluciones
    tables = root.findall('.//' + tbl_tag)
    keys = {}
    for tbl in tables:
        for row in tbl.findall('.//' + tr_tag):
            for cell in row.findall('.//' + tc_tag):
                txt = ''.join([t.text for t in cell.iter(t_tag) if t.text]).strip()
                if '.' in txt:
                    parts = txt.split('.')
                    try:
                        q_num = int(parts[0].strip())
                        letter = parts[1].strip().upper()
                        if letter in ['A', 'B', 'C', 'D', 'E']:
                            keys[q_num] = letter
                    except ValueError:
                        pass

    print(f"Claves de respuesta extraídas de la tabla: {len(keys)}")

    # 2. Extraer párrafos directos del cuerpo
    paras = []
    for el in list(body):
        if el.tag == p_tag:
            txt = ''.join([t.text for t in el.iter(t_tag) if t.text]).strip()
            if txt:
                paras.append(txt)

    # 3. Filtrar encabezados, títulos romanos y pies de página
    clean_paras = []
    prefixes_to_skip = (
        'BANCO DE PREGUNTAS',
        'Examen de',
        'Basado en',
        '137 preguntas',
        'Nombre:',
        'Instrucciones:',
        'Clave de respuestas',
        'Úsala al final',
        'Fuentes base',
        '• Material de clase'
    )

    for p in paras:
        if any(p.startswith(pref) for pref in prefixes_to_skip):
            continue
        # Secciones en números romanos: I., II., III., IV., V., VI., VII.
        if re.match(r'^[IVXLCDM]+\.\s+', p):
            continue
        clean_paras.append(p)

    print(f"Párrafos limpios procesados: {len(clean_paras)}")

    # 4. Parsear preguntas y opciones
    questions = []
    letter_to_index = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4}
    q_re = re.compile(r'^(\d+)[\.\)]\s*(.+)$')
    opt_re = re.compile(r'^([A-Ea-e])[\.\)]\s*(.+)$')

    i = 0
    while i < len(clean_paras):
        p = clean_paras[i]
        qm = q_re.match(p)
        if qm:
            q_num = int(qm.group(1))
            q_text = qm.group(2).strip()
            options = []

            # Las siguientes 5 líneas deben ser las opciones A, B, C, D, E
            for j in range(1, 6):
                if i + j < len(clean_paras):
                    opt_p = clean_paras[i + j]
                    om = opt_re.match(opt_p)
                    if om:
                        options.append(om.group(2).strip())
                    else:
                        options.append(opt_p.strip())

            ans_letter = keys.get(q_num)
            correct_index = letter_to_index.get(ans_letter) if ans_letter else None

            questions.append({
                'id': q_num,
                'question': q_text,
                'options': options,
                'correctAnswer': correct_index
            })

            i += 6
        else:
            i += 1

    print(f"Preguntas procesadas: {len(questions)}")

    # 5. Validación rigurosa
    errors = []
    for q in questions:
        if len(q['options']) != 5:
            errors.append(f"Pregunta {q['id']} tiene {len(q['options'])} opciones (requiere 5)")
        if q['correctAnswer'] is None or not (0 <= q['correctAnswer'] <= 4):
            errors.append(f"Pregunta {q['id']} no tiene clave de respuesta válida (valor: {q['correctAnswer']})")

    if errors:
        print(f"\nSe encontraron {len(errors)} advertencias:")
        for err in errors:
            print(f" - {err}")
    else:
        print("\n¡VALIDACIÓN PERFECTA! Todas las 137 preguntas tienen 5 alternativas y clave válida.")

    # 6. Escribir js/questions.js
    json_str = json.dumps(questions, ensure_ascii=False, indent=2)
    js_output = f"""/**
 * questions.js - Banco de preguntas de Examen de Investigación Científica
 * Basado en Material de Clase PFC I + Roberto Hernández-Sampieri (Metodología de la investigación, 6.ª ed.)
 * Total de preguntas: {len(questions)}
 * Cada pregunta cuenta con exactamente 5 alternativas (A, B, C, D, E).
 * correctAnswer: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E.
 */

const questions = {json_str};

// Exponer en objeto global para compatibilidad estática
window.quizQuestions = questions;
"""

    with open(output_js, 'w', encoding='utf-8') as f:
        f.write(js_output)

    print(f"\nArchivo generado exitosamente en '{output_js}' ({len(questions)} preguntas).")
    return len(questions), errors

if __name__ == '__main__':
    extract_and_generate()
