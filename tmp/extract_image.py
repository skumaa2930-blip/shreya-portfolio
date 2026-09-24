import re
import base64

with open("./tmp/write_exact_svg.py") as f:
    code = f.read()

# find xlink:href="data:image/png;base64,..."
match = re.search(r'data:image/png;base64,([^"]+)', code)
if match:
    img_data = base64.b64decode(match.group(1))
    with open("./public/assets/moni-rohan-persona.png", "wb") as f_img:
        f_img.write(img_data)
    print(f"Saved image to ./public/assets/moni-rohan-persona.png ({len(img_data)} bytes)")
else:
    print("Image not found in write_exact_svg.py")
