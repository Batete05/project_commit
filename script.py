import os
from datetime import datetime, timedelta

# Set the start date to January 1st of last year
start_year = datetime.now().year - 3  # Change if you want a different year
start_date = datetime(start_year, 1, 1)

# Number of days in the year
days_in_year = 365 if start_year % 4 != 0 else 366  # Account for leap years

# Number of commits to distribute
num_commits = 1000  # Adjust as needed

# Spread commits evenly across the year
for i in range(num_commits):
    day_offset = i % days_in_year  # Cycle through days in the year
    commit_date = start_date + timedelta(days=day_offset)
    commit_date_str = commit_date.strftime("%Y-%m-%d %H:%M:%S")

    with open("hello.txt", "a") as f:
        f.write(f"Commit {i+1} on {commit_date_str}\n")

    os.system("git add .")
    os.system(f'git commit --date="{commit_date_str}" -m "Commit {i+1}"')

print("Committing done. Now pushing to GitHub...")
os.system("git push origin main")
print("All commits pushed successfully!")
