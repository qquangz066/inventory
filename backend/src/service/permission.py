from typing import Optional, List

from sqlalchemy import desc
from sqlalchemy.orm import Session, Query

from model.permission import Permission
from request.permission import CreatePermission, ListPermission


def list(session: Session, request: ListPermission) -> (int, List[Permission]):
    query: Query = session.query(Permission)
    if request.name is not None:
        query = query.filter(Permission.name.like(f'%{request.name}%'))
    if request.offset is not None:
        query = query.offset(request.offset)
    if request.limit is not None:
        query = query.limit(request.limit)

    count = query.count()
    query = query.order_by(desc(Permission.id))

    return count, query.all()


def get(db_session: Session, id: int) -> Optional[Permission]:
    return db_session.query(Permission).get(id)


def get_by_name(db_session: Session, name: str) -> Optional[Permission]:
    return db_session.query(Permission).filter(Permission.name == name).first()


def post(db_session: Session, request: CreatePermission) -> Optional[Permission]:
    permission = Permission(
        name=request.name,
        description=request.description
    )
    db_session.add(permission)
    db_session.commit()
    return permission
