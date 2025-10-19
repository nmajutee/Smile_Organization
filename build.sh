#!/usr/bin/env bash

# Exit on error
set -o errexit
set -o pipefail
set -o nounset

echo "🔨 Installing dependencies..."
python -m pip install --upgrade pip
pip install -r requirements.txt

echo "🏗️ Running migrations..."
python manage.py makemigrations
python manage.py migrate

echo "📚 Collecting static files..."
python manage.py collectstatic --no-input

echo "✅ Build completed successfully!"