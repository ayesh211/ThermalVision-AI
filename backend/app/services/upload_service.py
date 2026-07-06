from pathlib import Path
import shutil

from app.utils.file_utils import (
    generate_filename,
    UPLOAD_FOLDER
)


def save_upload(file):
    filename = generate_filename(file.filename)

    destination = UPLOAD_FOLDER / filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return destination