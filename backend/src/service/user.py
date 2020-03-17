from typing import Optional

from sqlalchemy.orm import Session, defer

from core.exception import CustomException
from core.security import verify_password, get_password_hash
from model.user import User
from request.user import CreateUser


def get(db_session: Session, *, user_id: int) -> Optional[User]:
    return db_session.query(User).filter(User.id == user_id).first()


def create(session: Session, request: CreateUser) -> Optional[User]:
    user = User(
        name=request.name,
        email=request.email,
        hashed_password=get_password_hash(request.password),
        is_active=True,
        is_superuser=False
    )
    session.add(user)
    session.commit()
    return user


def activate(session: Session, user_id: int) -> Optional[User]:
    user = session.query(User).filter(User.id == user_id).first()
    if not user:
        raise CustomException(code=404, message='The user not found')
    if user.is_active:
        raise CustomException(code=400, message='The user is already activated')
    if user.is_superuser:
        raise CustomException(code=400, message="The user doesn't have enough privileges")
    user.is_active = True
    session.add(user)
    session.commit()
    return user


def deactivate(session: Session, user_id: int) -> Optional[User]:
    user = session.query(User).filter(User.id == user_id).first()
    if not user:
        raise CustomException(code=404, message='The user not found')
    if not user.is_active:
        raise CustomException(code=400, message='The user is already deactivated')
    if user.is_superuser:
        raise CustomException(code=400, message="The user doesn't have enough privileges")
    user.is_active = False
    session.add(user)
    session.commit()
    return user


def get_by_email(db_session: Session, *, email: str) -> Optional[User]:
    return db_session.query(User).filter(User.email == email).first()


def authenticate(db_session: Session, *, email: str, password: str) -> Optional[User]:
    user = get_by_email(db_session, email=email)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user


def is_active(user) -> bool:
    return user.is_active


def is_superuser(user) -> bool:
    return user.is_superuser


def get_multi(db_session: Session, *, offset=0, limit=100):
    return db_session.query(User).options(defer("hashed_password")).count(), \
           db_session.query(User).options(defer("hashed_password")).offset(offset).limit(limit).all()
