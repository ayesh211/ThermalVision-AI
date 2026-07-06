from pathlib import Path
from PIL import Image

SOURCE = Path("../raw_images")
DESTINATION = Path("../processed")

DESTINATION.mkdir(exist_ok=True)

SIZE = (640, 640)

for image in SOURCE.rglob("*.*"):

    try:

        img = Image.open(image)

        img = img.resize(SIZE)

        output = DESTINATION / image.name

        img.save(output)

        print("Saved:", output)

    except Exception:

        print("Skipped:", image)