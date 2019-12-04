from typing import Optional

from sqlalchemy.orm import Session, defer

from core.security import verify_password
from model.user import User


def get(db_session: Session, *, user_id: int) -> Optional[User]:
    return db_session.query(User).filter(User.id == user_id).first()


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


def get_multi(db_session: Session, *, skip=0, limit=100):
    return db_session.query(User).options(defer("hashed_password")).count(), \
           db_session.query(User).options(defer("hashed_password")).offset(skip).limit(limit).all()
