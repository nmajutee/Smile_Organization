#!/bin/bash
# Collect static files for production deployment

echo "📦 Collecting static files..."
python manage.py collectstatic --no-input

if [ $? -eq 0 ]; then
    echo "✅ Static files collected successfully!"
else
    echo "❌ Error collecting static files"
    exit 1
fi
