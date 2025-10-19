#!/usr/bin/env bash

# Exit on error
set -o errexit
set -o pipefail
set -o nounset

# Default port if not set
PORT="${PORT:-8000}"

echo "🚀 Starting Gunicorn on port ${PORT}..."
exec gunicorn smile_backend.wsgi:application \
    --bind=0.0.0.0:${PORT} \
    --workers=4 \
    --threads=4 \
    --log-level=info \
    --access-logfile=- \
    --error-logfile=- \
    --capture-output \
    --enable-stdio-inheritance