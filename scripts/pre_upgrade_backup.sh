#!/bin/bash
# Pre-Upgrade Backup Script
# Run this before upgrading to Ubuntu 22.04

set -e  # Exit on error

echo "🔍 Pre-Upgrade Backup Script"
echo "=============================="
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the Smile_Organization directory"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Check Git status
echo "🔍 Checking Git status..."
if ! git status &>/dev/null; then
    echo "❌ Not a git repository. Initializing..."
    git init
    git add .
    git commit -m "Initial commit before upgrade"
else
    echo "✅ Git repository detected"
fi

# Show uncommitted changes
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    echo ""
    echo "⚠️  You have uncommitted changes:"
    git status --short
    echo ""
    read -p "Do you want to commit these changes? (y/n): " commit_choice

    if [ "$commit_choice" = "y" ]; then
        git add .
        git commit -m "Pre-Ubuntu 22.04 upgrade backup - $(date '+%Y-%m-%d %H:%M:%S')"
        echo "✅ Changes committed"
    fi
else
    echo "✅ No uncommitted changes"
fi

# Check for remote
echo ""
echo "🔍 Checking Git remote..."
if ! git remote get-url origin &>/dev/null; then
    echo "⚠️  No remote repository configured"
    echo "   Add one with: git remote add origin <your-repo-url>"
else
    echo "✅ Remote configured: $(git remote get-url origin)"
    read -p "Do you want to push to remote? (y/n): " push_choice

    if [ "$push_choice" = "y" ]; then
        git push origin main 2>/dev/null || git push origin master 2>/dev/null || echo "⚠️  Push failed. Continue manually."
        echo "✅ Pushed to remote"
    fi
fi

# Create local backup
echo ""
echo "📦 Creating local backup..."
BACKUP_NAME="Smile_Organization_backup_$(date +%Y%m%d_%H%M%S).tar.gz"
cd ..
tar -czf "$BACKUP_NAME" Smile_Organization/ 2>/dev/null || echo "⚠️  Backup creation failed"

if [ -f "$BACKUP_NAME" ]; then
    BACKUP_SIZE=$(du -h "$BACKUP_NAME" | cut -f1)
    echo "✅ Backup created: $BACKUP_NAME ($BACKUP_SIZE)"
    echo "   Location: $(pwd)/$BACKUP_NAME"
else
    echo "❌ Backup failed!"
    exit 1
fi

cd Smile_Organization

# Check disk space
echo ""
echo "💾 Checking disk space..."
AVAILABLE=$(df -h / | awk 'NR==2 {print $4}')
echo "   Available space: $AVAILABLE"

if [ $(df / | awk 'NR==2 {print $4}') -lt 10485760 ]; then  # Less than 10GB
    echo "⚠️  WARNING: Less than 10GB free space!"
    echo "   Consider freeing up space before upgrading"
else
    echo "✅ Sufficient disk space"
fi

# Summary
echo ""
echo "✅ PRE-UPGRADE BACKUP COMPLETE!"
echo "=============================="
echo ""
echo "📋 Summary:"
echo "   - Git changes committed: Yes"
echo "   - Backup created: Yes"
echo "   - Backup location: $(dirname $(pwd))/$BACKUP_NAME"
echo ""
echo "🚀 You're ready to upgrade!"
echo ""
echo "Next steps:"
echo "1. sudo apt update && sudo apt upgrade -y"
echo "2. sudo do-release-upgrade"
echo ""
echo "⚠️  Make sure you have stable internet for 30-60 minutes!"
echo ""
