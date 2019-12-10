import logging
from datetime import timedelta

from fastapi import APIRouter, Depends, Form
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from core import config
from core.jwt import create_access_token
from dto.token import Token
from request.login import Login
from service import user as user_service

LOGGER = logging.getLogger(__name__)
router = APIRouter()


@router.post("/login/access-token", response_model=Token, tags=["login"])
def login_access_token(
        data: Login, db: Session = Depends(get_db)
):
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    user = user_service.authenticate(
        db, email=data.username, password=data.password
    )
    if not user:
        return JSONResponse(status_code=400, content={"message": "Incorrect username or password"})
    elif not user_service.is_active(user):
        return JSONResponse(status_code=400, content={"message": "Inactive user"})
    access_token_expires = timedelta(minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": create_access_token(
            user=user, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


if config.DEBUG:
    @router.post("/dev/login/access-token", response_model=Token, tags=["login"])
    def dev_login_access_token(
            username: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)
    ):
        """
        OAuth2 compatible token login, get an access token for future requests
        """
        user = user_service.authenticate(
            db, email=username, password=password
        )
        if not user:
            return JSONResponse(status_code=400, content={"message": "Incorrect username or password"})
        elif not user_service.is_active(user):
            return JSONResponse(status_code=400, content={"message": "Inactive user"})
        access_token_expires = timedelta(minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
        return {
            "access_token": create_access_token(
                user=user, expires_delta=access_token_expires
            ),
            "token_type": "bearer",
        }
