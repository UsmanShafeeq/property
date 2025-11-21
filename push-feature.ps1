# ===============================
# push-feature.ps1
# Automates feature branch merge workflow
# ===============================

param (
    [string]$featureBranch = $(Read-Host "Enter feature branch name"),
    [string]$commitMessage = $(Read-Host "Enter commit message")
)

# Step 1: Stage and commit changes
Write-Host "`n=== Staging and committing changes on $featureBranch ==="
git add .
git commit -m "$commitMessage"

# Step 2: Push feature branch
Write-Host "`n=== Pushing feature branch $featureBranch ==="
git push -u origin $featureBranch

# Step 3: Merge feature → dev
Write-Host "`n=== Merging $featureBranch into dev ==="
git checkout dev
git pull origin dev
git merge $featureBranch -m "Merge $featureBranch into dev"
git push origin dev

# Step 4: Merge dev → staging
Write-Host "`n=== Merging dev into staging ==="
git checkout staging
git pull origin staging
git merge dev -m "Merge dev into staging"
git push origin staging

# Step 5: Merge staging → main
Write-Host "`n=== Merging staging into main ==="
git checkout main
git pull origin main
git merge staging -m "Merge staging into main"
git push origin main

Write-Host "`n✅ All done! Feature branch has been merged up to main."
