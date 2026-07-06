from pathlib import Path
import uuid

UPLOAD_FOLDER = Path("app/uploads")
UPLOAD_FOLDER.mkdir(parents=True, exist_ok=True)

ALLOWED_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".bmp",
    ".tif",
    ".tiff"
}


def is_allowed_image(filename: str):
    return Path(filename).suffix.lower() in ALLOWED_EXTENSIONS


def generate_filename(filename: str):
    extension = Path(filename).suffix
    return f"{uuid.uuid4()}{extension}"