import os
import time
from datetime import datetime, timedelta
from random import randint

start_date = datetime.now() - timedelta(days=365 * 3)  # Start 1 year ago

for i in range(1000):  # Number of commits
    commit_date = start_date + timedelta(days=randint(0, 365))  # Random past date within 1 year
    commit_date_str = commit_date.strftime("%Y-%m-%d %H:%M:%S")

    with open("hello.txt", "a") as f:
        f.write(f"Commit {i+1} on {commit_date_str}\n")

    os.system("git add .")
    os.system(f'git commit --date="{commit_date_str}" -m "Commit {i+1}"')

print("Committing done. Now pushing to GitHub...")
os.system("git push origin main")
print("All commits pushed successfully!")
