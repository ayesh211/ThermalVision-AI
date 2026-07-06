from pathlib import Path

ROOT = Path("../raw_images")

print("\nDataset Summary\n")

total = 0

for folder in ROOT.iterdir():

    if folder.is_dir():

        count = len(list(folder.glob("*")))

        total += count

        print(f"{folder.name:<15}: {count}")

print("-" * 30)
print(f"Total Images : {total}")