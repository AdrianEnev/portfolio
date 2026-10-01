"""Fetch the reviewed, licensed photographs and create local WebP variants.
Run from the project root. Requires cwebp and macOS sips; no Python packages.
The JSON registry retains original source pages, licenses, and downloaded URLs.
"""
import json
from pathlib import Path
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "image-sources.json"
DEST = ROOT / "dist/assets/images"
DEST.mkdir(parents=True, exist_ok=True)
photos = json.loads(REGISTRY.read_text())
for photo in photos:
    if photo.get("variants") and all((ROOT / variant["path"]).is_file() for variant in photo["variants"]):
        continue
    with tempfile.NamedTemporaryFile(suffix=".jpg", dir=DEST) as raw:
        subprocess.run(["curl", "--fail", "--location", "--silent", "--show-error", "--retry", "2", "--max-time", "40", "--output", raw.name, photo["download_url"]], check=True)
        info = subprocess.check_output(["sips", "-g", "pixelWidth", "-g", "pixelHeight", raw.name], text=True)
        source_width = int(re.search(r"pixelWidth: (\d+)", info).group(1))
        source_height = int(re.search(r"pixelHeight: (\d+)", info).group(1))
        crop_args = []
        if photo.get("crop"):
            x, y, w, h = photo["crop"]
            crop_args = ["-crop", str(round(source_width*x)), str(round(source_height*y)), str(round(source_width*w)), str(round(source_height*h))]
            source_width, source_height = round(source_width*w), round(source_height*h)
        variants = []
        for width in (800, 1600):
            width = min(width, source_width)
            path = DEST / f'{photo["filename"]}-{width}.webp'
            subprocess.run(["cwebp", "-quiet", "-q", "84", "-m", "6"] + crop_args + ["-resize", str(width), "0", raw.name, "-o", str(path)], check=True)
            actual = subprocess.check_output(["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(path)], text=True)
            actual_width = int(re.search(r"pixelWidth: (\d+)", actual).group(1))
            actual_height = int(re.search(r"pixelHeight: (\d+)", actual).group(1))
            variants.append({"path": str(path.relative_to(ROOT)), "width": actual_width, "height": actual_height, "bytes": path.stat().st_size})
        photo["variants"] = variants
        print(photo["filename"], [(v["width"], v["bytes"]) for v in variants], flush=True)
    REGISTRY.write_text(json.dumps(photos, indent=2, ensure_ascii=False) + "\n")
