import random
import shutil
from pathlib import Path

SOURCE = Path("../processed")

TRAIN = Path("../images/train")
VAL = Path("../images/val")
TEST = Path("../images/test")

TRAIN.mkdir(parents=True, exist_ok=True)
VAL.mkdir(parents=True, exist_ok=True)
TEST.mkdir(parents=True, exist_ok=True)

images = list(SOURCE.glob("*"))

random.shuffle(images)

total = len(images)

train_end = int(total * 0.7)
val_end = int(total * 0.9)

train = images[:train_end]
val = images[train_end:val_end]
test = images[val_end:]

for img in train:
    shutil.copy(img, TRAIN / img.name)

for img in val:
    shutil.copy(img, VAL / img.name)

for img in test:
    shutil.copy(img, TEST / img.name)

print("Dataset Split Complete!")
print(f"Train: {len(train)}")
print(f"Validation: {len(val)}")
print(f"Test: {len(test)}")