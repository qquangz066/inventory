import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api.dependency.db import get_db
from api.dependency.security import get_current_active_superuser, get_current_active_user
from response.user import UserList, UserItem
from service import user as user_service

router = APIRouter()
LOGGER = logging.getLogger(__name__)


@router.get("/", response_model=UserList)
def read_users(
        db: Session = Depends(get_db),
        skip: int = 0,
        limit: int = 100,
        current_user=Depends(get_current_active_superuser),
):
    """
    Retrieve users.
    """
    count, users = user_service.get_multi(db, skip=skip, limit=limit)
    LOGGER.info('get all user')
    return UserList.from_model(count, users)


@router.get("/{user_id}", response_model=UserItem)
def read_user_by_id(
        user_id: int,
        current_user=Depends(get_current_active_user),
        db: Session = Depends(get_db),
):
    """
    Get a specific user by id.
    """
    LOGGER.info('get user')
    user = user_service.get(db, user_id=user_id)
    if not user:
        raise HTTPException(
            status_code=400, detail="The user not found"
        )
    if user == current_user:
        return UserItem.from_model(user)
    if not user_service.is_superuser(current_user):
        raise HTTPException(
            status_code=400, detail="The user doesn't have enough privileges"
        )
    return UserItem.from_model(user)
