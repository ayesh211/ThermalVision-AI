from pathlib import Path
from PIL import Image

ROOT = Path("../raw_images")

valid = 0
invalid = 0

for image_path in ROOT.rglob("*.*"):

    try:
        with Image.open(image_path) as img:
            img.verify()

        valid += 1

    except Exception:

        invalid += 1

        print("Invalid:", image_path)

print()

print(f"Valid Images : {valid}")

print(f"Invalid Images : {invalid}")