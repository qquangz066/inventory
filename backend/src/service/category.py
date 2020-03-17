from typing import Optional, List

from sqlalchemy import desc
from sqlalchemy.orm import Session, Query

from model.category import Category
from request.category import CreateCategory, ListCategory


def list(session: Session, request: ListCategory) -> (int, List[Category]):
    query: Query = session.query(Category)
    if request.name is not None:
        query = query.filter(Category.name.like(f'%{request.name}%'))
    if request.offset is not None:
        query = query.offset(request.offset)
    if request.limit is not None:
        query = query.limit(request.limit)

    count = query.count()
    query = query.order_by(desc(Category.id))

    return count, query.all()


def get(db_session: Session, id: int) -> Optional[Category]:
    return db_session.query(Category).get(id)


def get_by_name(db_session: Session, name: str) -> Optional[Category]:
    return db_session.query(Category).filter(Category.name == name).first()


def post(db_session: Session, request: CreateCategory) -> Optional[Category]:
    category = Category(
        name=request.name,
        description=request.description
    )
    db_session.add(category)
    db_session.commit()
    return category
