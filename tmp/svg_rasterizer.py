import re
import math

def parse_svg_paths(svg_text):
    # Extracts all paths and their fills
    path_matches = re.findall(r'<path d="([^"]+)"(?:\s+fill="([^"]+)")?', svg_text)
    return path_matches

def bezier_cubic(p0, p1, p2, p3, t):
    t2 = t * t
    t3 = t2 * t
    mt = 1 - t
    mt2 = mt * mt
    mt3 = mt2 * mt
    x = mt3 * p0[0] + 3 * mt2 * t * p1[0] + 3 * mt * t2 * p2[0] + t3 * p3[0]
    y = mt3 * p0[1] + 3 * mt2 * t * p1[1] + 3 * mt * t2 * p2[1] + t3 * p3[1]
    return (x, y)

def parse_path_to_lines(d):
    # Tokenize path commands
    tokens = re.findall(r'[MmLlCcZzHhVvSsQqTtAa]|[-+]?(?:\d*\.\d+|\d+)', d)
    polygons = []
    current_poly = []
    cur_pos = [0.0, 0.0]
    start_pos = [0.0, 0.0]
    
    i = 0
    while i < len(tokens):
        cmd = tokens[i]
        if cmd in 'Mm':
            if current_poly:
                polygons.append(current_poly)
                current_poly = []
            x = float(tokens[i+1])
            y = float(tokens[i+2])
            if cmd == 'm':
                cur_pos[0] += x
                cur_pos[1] += y
            else:
                cur_pos = [x, y]
            start_pos = list(cur_pos)
            current_poly.append(tuple(cur_pos))
            i += 3
        elif cmd in 'Ll':
            x = float(tokens[i+1])
            y = float(tokens[i+2])
            if cmd == 'l':
                cur_pos[0] += x
                cur_pos[1] += y
            else:
                cur_pos = [x, y]
            current_poly.append(tuple(cur_pos))
            i += 3
        elif cmd in 'Hh':
            x = float(tokens[i+1])
            if cmd == 'h':
                cur_pos[0] += x
            else:
                cur_pos[0] = x
            current_poly.append(tuple(cur_pos))
            i += 2
        elif cmd in 'Vv':
            y = float(tokens[i+1])
            if cmd == 'v':
                cur_pos[1] += y
            else:
                cur_pos[1] = y
            current_poly.append(tuple(cur_pos))
            i += 2
        elif cmd in 'Cc':
            p0 = tuple(cur_pos)
            if cmd == 'C':
                p1 = (float(tokens[i+1]), float(tokens[i+2]))
                p2 = (float(tokens[i+3]), float(tokens[i+4]))
                p3 = (float(tokens[i+5]), float(tokens[i+6]))
            else:
                p1 = (cur_pos[0] + float(tokens[i+1]), cur_pos[1] + float(tokens[i+2]))
                p2 = (cur_pos[0] + float(tokens[i+3]), cur_pos[1] + float(tokens[i+4]))
                p3 = (cur_pos[0] + float(tokens[i+5]), cur_pos[1] + float(tokens[i+6]))
            for step in range(1, 11):
                pt = bezier_cubic(p0, p1, p2, p3, step / 10.0)
                current_poly.append(pt)
            cur_pos = list(p3)
            i += 7
        elif cmd in 'Zz':
            if current_poly and current_poly[-1] != tuple(start_pos):
                current_poly.append(tuple(start_pos))
            cur_pos = list(start_pos)
            i += 1
        else:
            i += 1
            
    if current_poly:
        polygons.append(current_poly)
    return polygons

print("Parser module ready")
