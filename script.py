import os
import time
from datetime import datetime, timedelta
from random import randint

start_date = datetime.now() - timedelta(days=365 * 1)  # Start 2 years ago

for i in range(1000):  # Number of commits
    commit_date = start_date + timedelta(days=randint(0, 730))  # Random past date within 2 years
    commit_date_str = commit_date.strftime("%Y-%m-%d %H:%M:%S")

    with open("hello.txt", "a") as f:
        f.write(f"Commit {i+1} on {commit_date_str}\n")

    os.system("git add .")
    os.system(f'GIT_COMMITTER_DATE="{commit_date_str}" git commit --date="{commit_date_str}" -m "Initial commit"')
    os.system("git push origin main")  # Push after each commit
    time.sleep(2)  # Avoid rate limiting

print("All commits pushed successfully!")