# 🚀 Ubuntu 22.04 LTS Upgrade Guide
## For Django 5 & Python 3.12 Support

---

## ⚠️ CRITICAL - READ BEFORE STARTING

### Pre-Upgrade Checklist

- [ ] **Backup all important data**
- [ ] **Commit all Git changes** (`git add . && git commit -m "Pre-upgrade backup"`)
- [ ] **Push to GitHub** (`git push origin main`)
- [ ] **Have stable internet connection** (upgrade takes 30-60 minutes)
- [ ] **Close all applications** except terminal
- [ ] **Ensure at least 10GB free disk space**

---

## 📋 Step-by-Step Upgrade Process

### Step 1: Backup Your Current Project

```bash
# Navigate to parent directory
cd /home/alx

# Create a backup
tar -czf Smile_Organization_backup_$(date +%Y%m%d).tar.gz Smile_Organization/

# Verify backup was created
ls -lh Smile_Organization_backup_*.tar.gz
```

### Step 2: Commit Everything to Git

```bash
cd /home/alx/Smile_Organization

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Pre-Ubuntu 22.04 upgrade backup - $(date)"

# Push to GitHub
git push origin main
```

### Step 3: Update Current System

```bash
# Update package lists
sudo apt update

# Upgrade all packages on 20.04 first
sudo apt upgrade -y

# Remove unnecessary packages
sudo apt autoremove -y

# Reboot (recommended but optional)
sudo reboot
```

### Step 4: Upgrade to Ubuntu 22.04 LTS

```bash
# Update the release upgrader
sudo apt install update-manager-core -y

# Edit the upgrade settings (make sure Prompt=lts)
sudo nano /etc/update-manager/release-upgrades
# Ensure this line exists: Prompt=lts

# Start the upgrade process
sudo do-release-upgrade

# Follow the on-screen prompts:
# - Press 'y' to continue
# - Review and accept changes
# - Press 'y' to restart services
# - Wait patiently (30-60 minutes)
```

**During upgrade:**
- Don't interrupt the process
- Answer 'y' to most questions
- Keep default configurations unless you know what you're changing
- System will reboot automatically

### Step 5: After Upgrade - Verify

```bash
# Check Ubuntu version
lsb_release -a
# Should show: Ubuntu 22.04 LTS

# Check Python version
python3 --version
# Should show: Python 3.10.x
```

### Step 6: Install Python 3.12

```bash
# Add deadsnakes PPA
sudo add-apt-repository ppa:deadsnakes/ppa -y

# Update package lists
sudo apt update

# Install Python 3.12 with all tools
sudo apt install python3.12 python3.12-venv python3.12-dev python3.12-distutils -y

# Install pip for Python 3.12
curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3.12

# Verify installation
python3.12 --version
# Should show: Python 3.12.x
```

### Step 7: Recreate Virtual Environment

```bash
cd /home/alx/Smile_Organization

# Remove old virtual environment
rm -rf venv/

# Create new venv with Python 3.12
python3.12 -m venv venv

# Activate it
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Install all dependencies (we'll update requirements.txt first)
pip install -r requirements.txt
```

---

## 🛡️ Safety Tips

### If Something Goes Wrong:

1. **Don't panic** - Ubuntu upgrades are usually smooth
2. **Search the error** - Most issues are documented
3. **Check logs**: `/var/log/dist-upgrade/`
4. **Recovery mode**: Hold Shift during boot to access

### Common Issues & Fixes:

**Issue 1: "No new release found"**
```bash
# Solution:
sudo nano /etc/update-manager/release-upgrades
# Change: Prompt=lts
sudo do-release-upgrade -d  # -d flag for development release
```

**Issue 2: Broken packages after upgrade**
```bash
sudo apt --fix-broken install
sudo apt autoremove
sudo apt clean
```

**Issue 3: Python 3.12 not found**
```bash
# Make sure PPA was added correctly
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
apt-cache search python3.12
```

---

## 📊 What You'll Get After Upgrade

### Ubuntu 22.04 LTS Features:
- ✅ Python 3.10 (default)
- ✅ Python 3.12 (via PPA)
- ✅ Support until April 2027
- ✅ Modern kernel and drivers
- ✅ Better performance
- ✅ Latest security patches

### Development Stack:
- ✅ **Python 3.12** - Latest features
- ✅ **Django 5.1** - Latest stable
- ✅ **PostgreSQL 14+** - Better performance
- ✅ All modern packages

---

## 🎯 Estimated Timeline

| Step | Time | Notes |
|------|------|-------|
| Backup & Git | 5 min | Quick |
| System update | 10 min | Depends on internet |
| Ubuntu upgrade | 30-60 min | Be patient |
| Python 3.12 install | 5 min | Fast |
| Recreate venv | 5 min | Quick |
| **Total** | **~1 hour** | Have coffee ready ☕ |

---

## 🚦 Ready to Start?

Once you confirm, I'll help you through each step. The process is:

1. ✅ Backup and commit to Git
2. ✅ Upgrade to Ubuntu 22.04
3. ✅ Install Python 3.12
4. ✅ Update requirements.txt for Django 5
5. ✅ Reinstall dependencies
6. ✅ Continue with project development

**Important:** Make sure you have **stable internet** and **at least 1 hour** of uninterrupted time.

---

## ⏭️ Next Steps

Reply with:
- **"Ready"** - I'll start the backup and upgrade process
- **"Wait"** - You need to prepare something first
- **"Questions"** - You have concerns

Let's do this! 🚀
