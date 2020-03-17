from datetime import datetime, timedelta

import jwt

from core import config
from model.user import User

ALGORITHM = "HS256"
access_token_jwt_subject = "access"


def create_access_token(*, user: User, expires_delta: timedelta = None):
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    encoded_jwt = jwt.encode(
        {"exp": expire,
         "user_id": user.id,
         "email": user.email,
         "name": user.name,
         "is_superuser": user.is_superuser
         },
        config.SECRET_KEY, algorithm=ALGORITHM
    )
    return encoded_jwt
