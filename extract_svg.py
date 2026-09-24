import json
import re

log_file = '/.aistudio/artifacts/brain/5ed5caca-d1d9-4188-9a71-be1cf7b0f551/.system_generated/logs/transcript.jsonl'
with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            # Find in data recursively
            s = json.dumps(data)
            if '<svg' in s and '654' in s and '1280' in s:
                # Find the svg tag
                match = re.search(r'<svg[\s\S]*?<\/svg>', s)
                if match:
                    svg_content = match.group(0)
                    # Unescape json
                    svg_clean = json.loads('"' + svg_content.replace('"', '\\"').replace('\n', '\\n') + '"')
                    # Actually let's just decode cleanly
                    pass
        except Exception as e:
            pass

# Let's inspect the last user turn directly from json structure
with open(log_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    data = json.loads(line)
    def find_svg(obj):
        if isinstance(obj, str):
            if '<svg' in obj and '</svg>' in obj:
                return obj
        elif isinstance(obj, dict):
            for v in obj.values():
                res = find_svg(v)
                if res: return res
        elif isinstance(obj, list):
            for item in obj:
                res = find_svg(item)
                if res: return res
        return None

    res = find_svg(data)
    if res:
        m = re.search(r'(<svg[\s\S]*?<\/svg>)', res)
        if m:
            svg_text = m.group(1)
            with open('extracted_user_svg.svg', 'w', encoding='utf-8') as out:
                out.write(svg_text)
            print("Successfully extracted SVG! Total length:", len(svg_text))
            break
