from ultralytics import YOLO
import torch


def main():
    print("=" * 50)
    print("ThermalVision AI Training")
    print("=" * 50)

    device = 0 if torch.cuda.is_available() else "cpu"

    print(f"Training Device: {device}")

    model = YOLO("yolo11n.pt")

    model.train(
        data="datasets/weapon_v1/data.yaml",
        epochs=50,
        imgsz=640,
        batch=8,
        device=device,
        project="runs",
        name="weapon_detector_v1",
        pretrained=True,
        workers=2,
        patience=20,
        save=True
    )


if __name__ == "__main__":
    main()