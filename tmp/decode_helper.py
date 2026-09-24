import re
import base64

# Let's inspect the SVG text paths and extract image
# First, let's look at the paths in the prompt:
# Path 1: starts at M97.96 195.156 ... fill="#F5F5F0" -> Title
# Path 2: starts at M97.154 231.156 ... fill="#8E8E8A" -> Paragraph line 1
# Path 3: starts at M100.738 254.324 ... fill="#8E8E8A" -> Paragraph line 2
# Path 4: starts at M100.248 277.324 ... fill="#8E8E8A" -> Paragraph line 3
# Path 5: starts at M100.248 299.324 ... fill="#8E8E8A" -> Paragraph line 4
# Path 6: starts at M551.064 194.156 ... fill="#C9F24A" -> Card header "ROADMAP" or similar?
# Path 7: starts at M551.104 221.156 ... fill="#F5F5F0" -> Card subheader "PROJECT ANALYSIS"?
# Path 8: divider
# Path 9: starts at M553.624 256.276 ... fill="#F5F5F0" -> Row 1 text
# Path 10: starts at M610.503 256.156 ... fill="#F5F5F0" -> Row 1 value
# Path 11: starts at M553.648 278.276 ... fill="#F5F5F0" -> Row 2 text
# Path 12: starts at M601.291 278.156 ... fill="#F5F5F0" -> Row 2 value
# Path 13: starts at M551.092 300.156 ... fill="#F5F5F0" -> Row 3 text
# Path 14: starts at M632.664 300.276 ... fill="#F5F5F0" -> Row 3 value
# Path 15: starts at M551.236 322.156 ... fill="#F5F5F0" -> Row 4 text
# Path 16: starts at M629.568 322.156 ... fill="#F5F5F0" -> Row 4 value
# Path 17: starts at M105.052 408.724 ... fill="#C9F24A" -> Section title "USER GOALS" / "USER ACTIONS" / "CORE FLOWS"?
# Card 01: Number 01 (fill #C9F24A), text lines
# Card 02: Number 02 (fill #C9F24A), text lines
# Card 03: Number 03 (fill #C9F24A), text lines
# Card 04: Number 04 (fill #C9F24A), text lines
print("Decoder script ready")
