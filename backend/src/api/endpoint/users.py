import logging

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from api.dependency.security import get_current_active_superuser, get_current_active_user
from core.exception import CustomException
from request.user import CreateUser
from response.user import UserList, UserItem
from service import user as user_service

router = APIRouter()
LOGGER = logging.getLogger(__name__)


@router.get("/", response_model=UserList)
def read_users(
        db: Session = Depends(get_db),
        offset: int = 0,
        limit: int = 10,
        current_user=Depends(get_current_active_superuser),
):
    """
    Retrieve users.
    """
    count, users = user_service.get_multi(db, offset=offset, limit=limit)
    return UserList.from_model(count, users)


@router.post("/", response_model=UserItem)
def create(
        request: CreateUser,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    user = user_service.get_by_email(db, email=request.email)
    if user:
        raise CustomException(code=400, message='The email already exists')
    return UserItem.from_model(user_service.create(db, request=request))


@router.post("/{user_id}/activate", response_model=UserItem)
def activate(
        user_id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    return UserItem.from_model(user_service.activate(db, user_id=user_id))


@router.post("/{user_id}/deactivate", response_model=UserItem)
def deactivate(
        user_id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    return UserItem.from_model(user_service.deactivate(db, user_id=user_id))


@router.get("/{user_id}", response_model=UserItem)
def read_user_by_id(
        user_id: int,
        current_user=Depends(get_current_active_user),
        db: Session = Depends(get_db),
):
    """
    Get a specific user by id.
    """
    user = user_service.get(db, user_id=user_id)
    if not user:
        return JSONResponse(status_code=404, content={"message": "The user not found"})
    if user == current_user:
        return UserItem.from_model(user)
    if not user_service.is_superuser(current_user):
        return JSONResponse(status_code=400, content={"message": "The user doesn't have enough privileges"})
    return UserItem.from_model(user)
