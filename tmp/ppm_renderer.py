import re
import math

# We can render the SVG paths to a bitmap/PPM file
width = 1280
height = 654
grid = [[' ' for _ in range(width // 4)] for _ in range(height // 8)]

# Let's write a quick rasterizer to PPM
# PPM format: P6\n width height\n 255\n <bytes>
img_data = bytearray([18, 18, 18] * (width * height))

def set_pixel(x, y, r, g, b):
    if 0 <= x < width and 0 <= y < height:
        idx = (y * width + x) * 3
        img_data[idx] = r
        img_data[idx+1] = g
        img_data[idx+2] = b

def draw_line(x0, y0, x1, y1, r, g, b):
    dx = abs(x1 - x0)
    dy = abs(y1 - y0)
    sx = 1 if x0 < x1 else -1
    sy = 1 if y0 < y1 else -1
    err = dx - dy
    while True:
        set_pixel(int(x0), int(y0), r, g, b)
        if int(x0) == int(x1) and int(y0) == int(y1):
            break
        e2 = 2 * err
        if e2 > -dy:
            err -= dy
            x0 += sx
        if e2 < dx:
            err += dx
            y0 += sy

def bezier_cubic(p0, p1, p2, p3, t):
    mt = 1 - t
    return (
        mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0],
        mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
    )

def render_path(d, r, g, b):
    tokens = re.findall(r'[MmLlCcZzHhVvSsQqTtAa]|[-+]?(?:\d*\.\d+|\d+)', d)
    cur_pos = [0.0, 0.0]
    start_pos = [0.0, 0.0]
    i = 0
    while i < len(tokens):
        cmd = tokens[i]
        if cmd in 'Mm':
            x, y = float(tokens[i+1]), float(tokens[i+2])
            cur_pos = [cur_pos[0] + x, cur_pos[1] + y] if cmd == 'm' else [x, y]
            start_pos = list(cur_pos)
            i += 3
        elif cmd in 'Ll':
            x, y = float(tokens[i+1]), float(tokens[i+2])
            nxt = [cur_pos[0] + x, cur_pos[1] + y] if cmd == 'l' else [x, y]
            draw_line(cur_pos[0], cur_pos[1], nxt[0], nxt[1], r, g, b)
            cur_pos = nxt
            i += 3
        elif cmd in 'Hh':
            x = float(tokens[i+1])
            nxt = [cur_pos[0] + x, cur_pos[1]] if cmd == 'h' else [x, cur_pos[1]]
            draw_line(cur_pos[0], cur_pos[1], nxt[0], nxt[1], r, g, b)
            cur_pos = nxt
            i += 2
        elif cmd in 'Vv':
            y = float(tokens[i+1])
            nxt = [cur_pos[0], cur_pos[1] + y] if cmd == 'v' else [cur_pos[0], y]
            draw_line(cur_pos[0], cur_pos[1], nxt[0], nxt[1], r, g, b)
            cur_pos = nxt
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
            prev_pt = p0
            for step in range(1, 16):
                pt = bezier_cubic(p0, p1, p2, p3, step / 15.0)
                draw_line(prev_pt[0], prev_pt[1], pt[0], pt[1], r, g, b)
                prev_pt = pt
            cur_pos = list(p3)
            i += 7
        elif cmd in 'Zz':
            draw_line(cur_pos[0], cur_pos[1], start_pos[0], start_pos[1], r, g, b)
            cur_pos = list(start_pos)
            i += 1
        else:
            i += 1

print("Rasterizer ready")
