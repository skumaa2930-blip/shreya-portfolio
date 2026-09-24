import re

# We will decode the SVG paths from user prompt by rendering them to ASCII or reading glyph coordinates
from ascii_tool import rasterize_path_ascii, print_ascii

svg_file = "/tmp/user_input.svg"

with open(svg_file, "r") as f:
    content = f.read()

paths = re.findall(r'<path d="([^"]+)"(?:\s+fill="([^"]+)")?', content)
print(f"Total paths: {len(paths)}")

for idx, (d, fill) in enumerate(paths):
    pts = rasterize_path_ascii(d)
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    print(f"\n--- Path {idx}: Fill={fill}, Bounds: X=[{min(xs):.1f}, {max(xs):.1f}], Y=[{min(ys):.1f}, {max(ys):.1f}] ---")
    print_ascii(pts)
