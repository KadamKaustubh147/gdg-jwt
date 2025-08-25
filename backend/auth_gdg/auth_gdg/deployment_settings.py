import os
import dj_database_url
from decouple import config

from .settings import *
from .settings import BASE_DIR

# or os.environ.get('RENDER_EXTERNAL_HOSTNAME')
ALLOWED_HOSTS = [config("RENDER_EXTERNAL_HOSTNAME")]
CSRF_TRUSTED_ORIGINS = ['https://'+config("RENDER_EXTERNAL_HOSTNAME")]

DEBUG = False
SECRET_KEY = config("SECRET_KEY")

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:5173",
# ]

STORAGES = {
    "default":{
        "BACKEND" : "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND" : "whitenoise.storage.CompressedStaticFilesStorage",
    },
}

DATABASES = {
    'default': dj_database_url.parse(
        config('DATABASE_URL'),
        conn_max_age=600,
        ssl_require=True
    )
}


FRONTEND_URL="https://gdg-jwt-frontend.onrender.com/"