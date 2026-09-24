import math
import re

# Let's create an ASCII rasterizer for any path d and print it in high resolution terminal format
def bezier_cubic(p0, p1, p2, p3, t):
    mt = 1 - t
    return (
        mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0],
        mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
    )

def rasterize_path_ascii(d, scale=1.0):
    tokens = re.findall(r'[MmLlCcZzHhVvSsQqTtAa]|[-+]?(?:\d*\.\d+|\d+)', d)
    points = []
    cur_pos = [0.0, 0.0]
    start_pos = [0.0, 0.0]
    i = 0
    while i < len(tokens):
        cmd = tokens[i]
        if cmd in 'Mm':
            x, y = float(tokens[i+1]), float(tokens[i+2])
            cur_pos = [cur_pos[0] + x, cur_pos[1] + y] if cmd == 'm' else [x, y]
            start_pos = list(cur_pos)
            points.append(tuple(cur_pos))
            i += 3
        elif cmd in 'Ll':
            x, y = float(tokens[i+1]), float(tokens[i+2])
            cur_pos = [cur_pos[0] + x, cur_pos[1] + y] if cmd == 'l' else [x, y]
            points.append(tuple(cur_pos))
            i += 3
        elif cmd in 'Hh':
            x = float(tokens[i+1])
            cur_pos[0] = cur_pos[0] + x if cmd == 'h' else x
            points.append(tuple(cur_pos))
            i += 2
        elif cmd in 'Vv':
            y = float(tokens[i+1])
            cur_pos[1] = cur_pos[1] + y if cmd == 'v' else y
            points.append(tuple(cur_pos))
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
            for step in range(1, 15):
                points.append(bezier_cubic(p0, p1, p2, p3, step / 14.0))
            cur_pos = list(p3)
            i += 7
        elif cmd in 'Zz':
            cur_pos = list(start_pos)
            points.append(tuple(start_pos))
            i += 1
        else:
            i += 1
    return points

def print_ascii(points, width_chars=120, height_chars=30):
    if not points:
        return
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    
    dx = max_x - min_x or 1.0
    dy = max_y - min_y or 1.0
    
    # Calculate aspect ratio
    # Font characters are approx 2:1 (height:width)
    target_w = min(160, max(40, int(dx * 1.5)))
    target_h = min(40, max(10, int(dy * 1.2)))
    
    grid = [[' ' for _ in range(target_w + 1)] for _ in range(target_h + 1)]
    for x, y in points:
        gx = int((x - min_x) / dx * target_w)
        gy = int((y - min_y) / dy * target_h)
        if 0 <= gy <= target_h and 0 <= gx <= target_w:
            grid[gy][gx] = '#'
            
    for row in grid:
        line = "".join(row)
        if line.strip():
            print(line)

print("ASCII tool ready")
