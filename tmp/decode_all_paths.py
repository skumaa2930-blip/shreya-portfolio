import re
from ascii_tool import rasterize_path_ascii, print_ascii

svg_path = "/tmp/user_input.svg"

# Let's read all paths from the prompt SVG
# Let's extract the paths directly from the python code
with open("./tmp/save_svg_input.py") as f:
    code = f.read()

# find svg_content
match = re.search(r'svg_content = """(.*?)"""', code, re.DOTALL)
if match:
    svg = match.group(1)
else:
    # try reading directly
    svg = code

paths = re.findall(r'<path d="([^"]+)"(?:\s+fill="([^"]+)")?', svg)
print(f"Total paths found: {len(paths)}")

for idx, (d, fill) in enumerate(paths):
    pts = rasterize_path_ascii(d)
    if not pts:
        print(f"Path {idx}: (empty/clip/rect)")
        continue
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    print(f"\n==================== Path {idx}: Fill={fill} Bounds: X=[{min(xs):.1f}, {max(xs):.1f}], Y=[{min(ys):.1f}, {max(ys):.1f}] ====================")
    print_ascii(pts)
