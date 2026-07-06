from fastapi import APIRouter, UploadFile, File, HTTPException

from app.utils.file_utils import is_allowed_image
from app.services.upload_service import save_upload
from app.ai.detector import detector

router = APIRouter()


@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):

    if not is_allowed_image(file.filename):
        raise HTTPException(
            status_code=400,
            detail="Unsupported image format."
        )

    saved_path = save_upload(file)

    result = detector.detect(saved_path)

    return result