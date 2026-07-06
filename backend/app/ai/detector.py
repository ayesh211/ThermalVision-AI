class WeaponDetector:

    def __init__(self):
        self.model_loaded = False

    def load_model(self):
        """
        YOLO11 will be loaded here later.
        """
        self.model_loaded = True

    def detect(self, image_path):

        return {
            "success": True,
            "objects": [],
            "count": 0,
            "image": str(image_path)
        }


detector = WeaponDetector()
detector.load_model()