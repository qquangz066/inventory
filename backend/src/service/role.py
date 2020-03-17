from typing import Optional, List

from sqlalchemy import desc
from sqlalchemy.orm import Session, Query

from model.role import Role
from request.role import CreateRole, ListRole


def list(session: Session, request: ListRole) -> (int, List[Role]):
    query: Query = session.query(Role)
    if request.name is not None:
        query = query.filter(Role.name.like(f'%{request.name}%'))
    if request.offset is not None:
        query = query.offset(request.offset)
    if request.limit is not None:
        query = query.limit(request.limit)

    count = query.count()
    query = query.order_by(desc(Role.id))

    return count, query.all()


def get(db_session: Session, id: int) -> Optional[Role]:
    return db_session.query(Role).get(id)


def get_by_name(db_session: Session, name: str) -> Optional[Role]:
    return db_session.query(Role).filter(Role.name == name).first()


def post(db_session: Session, request: CreateRole) -> Optional[Role]:
    role = Role(
        name=request.name,
        description=request.description
    )
    db_session.add(role)
    db_session.commit()
    return role
