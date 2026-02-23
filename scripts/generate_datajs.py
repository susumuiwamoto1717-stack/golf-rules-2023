#!/usr/bin/env python3
"""
クリーンなJSONデータからapp/js/data.jsを生成するスクリプト
"""

import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
APP_DIR = os.path.join(BASE_DIR, "app", "js")

def main():
    # Read clean rules data
    with open(os.path.join(DATA_DIR, "rules_clean.json"), "r", encoding="utf-8") as f:
        rules = json.load(f)

    # Read definitions
    with open(os.path.join(DATA_DIR, "definitions.json"), "r", encoding="utf-8") as f:
        definitions = json.load(f)

    # Read updates
    with open(os.path.join(DATA_DIR, "updates.json"), "r", encoding="utf-8") as f:
        updates = json.load(f)

    # Generate data.js
    js_content = "/**\n * ゴルフ規則 PWA - データ\n * 自動生成ファイル（generate_datajs.pyにより生成）\n */\n\n"

    js_content += "const RULES_DATA = "
    js_content += json.dumps(rules, ensure_ascii=False, indent=2)
    js_content += ";\n\n"

    js_content += "const DEFINITIONS_DATA = "
    js_content += json.dumps(definitions, ensure_ascii=False, indent=2)
    js_content += ";\n\n"

    js_content += "const UPDATES_DATA = "
    js_content += json.dumps(updates, ensure_ascii=False, indent=2)
    js_content += ";\n"

    output_path = os.path.join(APP_DIR, "data.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    size_kb = os.path.getsize(output_path) / 1024
    print(f"Generated {output_path}")
    print(f"  Size: {size_kb:.1f} KB")
    print(f"  Rules: {len(rules)}")
    print(f"  Definitions: {len(definitions)}")

if __name__ == "__main__":
    main()
