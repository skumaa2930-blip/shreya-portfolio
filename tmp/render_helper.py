import sys
from ascii_tool import rasterize_path_ascii, print_ascii

def render_slices(d_str, label, slice_w=80):
    pts = rasterize_path_ascii(d_str)
    if not pts:
        print(f"Empty path for {label}")
        return
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    min_x, max_x = min(xs), max(xs)
    print(f"\n==================== {label} ({min(xs):.1f}, {min(ys):.1f}) to ({max(xs):.1f}, {max(ys):.1f}) ====================")
    cur = min_x
    while cur < max_x:
        sub = [p for p in pts if cur - 2 <= p[0] <= cur + slice_w + 2]
        if sub:
            print(f"--- X: {cur:.1f} .. {cur+slice_w:.1f} ---")
            print_ascii(sub)
        cur += slice_w
