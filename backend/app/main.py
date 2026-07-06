from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router

app = FastAPI(
    title="ThermalVision AI API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
async def root():
    return {
        "message": "ThermalVision AI Backend Running"
    }

@app.get("/health")
async def health():
    return {
        "status": "online",
        "model": "Loaded",
        "camera": "Disconnected"
    }