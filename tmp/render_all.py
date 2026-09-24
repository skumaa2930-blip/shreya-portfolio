import re

# Read the user prompt SVG paths from file or string
# Let's inspect the SVG in detail
svg_path = 'tmp/test_full.svg'
# Let's parse all paths
with open(svg_path) as f:
    content = f.read()

from ppm_renderer import render_path, img_data, width, height

matches = re.findall(r'<path d="([^"]+)"(?:\s+fill="([^"]+)")?', content)
print("Found matches:", len(matches))
for d, fill in matches:
    if fill == '#F5F5F0':
        render_path(d, 245, 245, 240)
    elif fill == '#C9F24A':
        render_path(d, 201, 242, 74)
    elif fill == '#8E8E8A':
        render_path(d, 142, 142, 138)
    else:
        render_path(d, 255, 255, 255)

# Save as PPM
with open('tmp/output.ppm', 'wb') as f:
    header = f"P6\n{width} {height}\n255\n".encode('ascii')
    f.write(header)
    f.write(img_data)

print("Saved output.ppm successfully!")
