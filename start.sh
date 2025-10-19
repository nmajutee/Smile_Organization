#!/bin/bash

# Exit on error
set -o errexit

echo "🚀 Starting Gunicorn..."
gunicorn smile_backend.wsgi:application --bind=0.0.0.0:$PORT --workers=4 --threads=4 --log-level=info