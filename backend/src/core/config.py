import os

from starlette.config import Config

config = Config(os.path.realpath(f'{os.path.dirname(__file__)}/../../.env'))
SECRET_KEY = config(key="SECRET_KEY") or os.urandom(32)
DEBUG = config(key="DEBUG", cast=bool, default=True)
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 8  # 60 minutes * 24 hours * 8 days = 8 days

BACKEND_CORS_ORIGINS = config("BACKEND_CORS_ORIGINS")
# a string of origins separated by commas, e.g: "http://localhost, http://localhost:4200, http://localhost:3000, http://localhost:8080, http://local.dockertoolbox.tiangolo.com"

PROJECT_NAME = config("PROJECT_NAME")
DATABASE_URL = config("DB_CONNECTION")
