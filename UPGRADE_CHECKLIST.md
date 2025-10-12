# ✅ Ubuntu 22.04 Upgrade Checklist

## System Information
- Current: Ubuntu 20.04.6 LTS (Focal)
- Target: Ubuntu 22.04 LTS (Jammy)
- Free Space: 953GB ✅
- Internet: Required (stable connection)

---

## 📋 Pre-Upgrade Steps (Do These First!)

### 1. Run the Backup Script
```bash
cd /home/alx/Smile_Organization
./scripts/pre_upgrade_backup.sh
```

This will:
- Commit all Git changes
- Push to GitHub (if configured)
- Create a local backup
- Check disk space

### 2. Verify Backup
```bash
ls -lh /home/alx/Smile_Organization_backup_*.tar.gz
```
Make sure the backup file exists!

### 3. Update Current System
```bash
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
```

---

## 🚀 Upgrade Process

### Step 1: Configure Release Upgrader
```bash
sudo nano /etc/update-manager/release-upgrades
```
Ensure this line exists:
```
Prompt=lts
```
Save and exit (Ctrl+X, Y, Enter)

### Step 2: Start Upgrade
```bash
sudo do-release-upgrade
```

### Step 3: Follow Prompts
- Press **Y** to continue
- Press **Y** for service restarts
- Keep default configurations
- Be patient (30-60 minutes)
- **DO NOT INTERRUPT**

### Step 4: Reboot
The system will reboot automatically. Wait for it to complete.

---

## 🔍 Post-Upgrade Verification

### 1. Check Ubuntu Version
```bash
lsb_release -a
```
Should show: **Ubuntu 22.04.x LTS**

### 2. Check Default Python
```bash
python3 --version
```
Should show: **Python 3.10.x**

---

## 🐍 Install Python 3.12

### 1. Add Deadsnakes PPA
```bash
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
```

### 2. Install Python 3.12
```bash
sudo apt install python3.12 python3.12-venv python3.12-dev -y
```

### 3. Install pip for Python 3.12
```bash
curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3.12
```

### 4. Verify Installation
```bash
python3.12 --version
pip3.12 --version
```

---

## 🔄 Recreate Project Environment

### 1. Navigate to Project
```bash
cd /home/alx/Smile_Organization
```

### 2. Remove Old Virtual Environment
```bash
rm -rf venv/
```

### 3. Create New venv with Python 3.12
```bash
python3.12 -m venv venv
```

### 4. Activate Virtual Environment
```bash
source venv/bin/activate
```

### 5. Upgrade pip
```bash
pip install --upgrade pip
```

### 6. Install Django 5 and All Dependencies
```bash
pip install -r requirements.txt
```

This will install:
- ✅ Django 5.1.2 (latest stable)
- ✅ Django REST Framework 3.15.2
- ✅ All payment SDKs
- ✅ All other dependencies

### 7. Verify Django Installation
```bash
python -c "import django; print(django.get_version())"
```
Should show: **5.1.2**

---

## 🎉 Success Checklist

After everything is complete, verify:

- [ ] Ubuntu version is 22.04.x
- [ ] Python 3.12 is installed
- [ ] Virtual environment is active
- [ ] Django 5.1.2 is installed
- [ ] All dependencies installed without errors

---

## 🆘 Troubleshooting

### Issue: Upgrade hangs or freezes
**Solution:** Be patient. Download speed varies. Can take up to 90 minutes.

### Issue: "No new release found"
**Solution:**
```bash
sudo nano /etc/update-manager/release-upgrades
# Change to: Prompt=lts
sudo do-release-upgrade -d
```

### Issue: Broken packages after upgrade
**Solution:**
```bash
sudo apt --fix-broken install
sudo apt autoremove
sudo dpkg --configure -a
```

### Issue: Python 3.12 not found
**Solution:**
```bash
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install python3.12 python3.12-venv python3.12-dev -y
```

### Issue: pip not found for Python 3.12
**Solution:**
```bash
curl -sS https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo python3.12 get-pip.py
rm get-pip.py
```

---

## 📞 Need Help?

If you encounter issues:
1. **Don't panic** - Most issues have simple fixes
2. **Read error messages carefully**
3. **Search error messages online**
4. **Check Ubuntu forums**
5. **Ask me for help!**

---

## 🎯 Timeline Summary

| Phase | Duration | Notes |
|-------|----------|-------|
| Backup | 5 min | Quick |
| System update | 10 min | Depends on internet |
| Upgrade to 22.04 | 30-60 min | **BE PATIENT** |
| Python 3.12 install | 5 min | Quick |
| Recreate environment | 5 min | Quick |
| Install dependencies | 10 min | Depends on internet |
| **TOTAL** | **~75 min** | ☕☕☕ |

---

## ✅ Ready to Begin?

When you're ready, start with:

```bash
cd /home/alx/Smile_Organization
./scripts/pre_upgrade_backup.sh
```

Then proceed with the upgrade steps!

**Good luck! You've got this! 🚀**
