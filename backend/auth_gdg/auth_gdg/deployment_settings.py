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

DJOSER = {
    "SERIALIZERS": {
        "user_create": "accounts.serializers.UserCreateSerializer",
    },
    # not required below thing if frontend and backend running on same domain
    'EMAIL_FRONTEND_DOMAIN' "https://gdg-jwt-frontend.onrender.com":,
    'SEND_ACTIVATION_EMAIL': True,
    # frontend mei daaldo baas activation link ke liye post request karna padega frontend se --> extract the uid and token from the url using react router hooks
    'ACTIVATION_URL': 'activation/{uid}/{token}/',
    'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}/',
    'USER_CREATE_PASSWORD_RETYPE': True,
    "PASSWORD_RESET_CONFIRM_RETYPE": True,
    # if the email is not in the db then give out 400 error --> check djoser endpoints documentation
    "PASSWORD_RESET_SHOW_EMAIL_NOT_FOUND":True,
}

FRONTEND_URL="https://gdg-jwt-frontend.onrender.com/"