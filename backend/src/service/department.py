from typing import Optional, List

from sqlalchemy import desc
from sqlalchemy.orm import Session, Query

from model.department import Department
from request.department import CreateDepartment, ListDepartment


def list(session: Session, request: ListDepartment) -> (int, List[Department]):
    query: Query = session.query(Department)
    if request.name is not None:
        query = query.filter(Department.name.like(f'%{request.name}%'))
    if request.offset is not None:
        query = query.offset(request.offset)
    if request.limit is not None:
        query = query.limit(request.limit)

    count = query.count()
    query = query.order_by(desc(Department.id))

    return count, query.all()


def get(db_session: Session, id: int) -> Optional[Department]:
    return db_session.query(Department).get(id)


def get_by_name(db_session: Session, name: str) -> Optional[Department]:
    return db_session.query(Department).filter(Department.name == name).first()


def post(db_session: Session, request: CreateDepartment) -> Optional[Department]:
    department = Department(
        name=request.name,
        description=request.description
    )
    db_session.add(department)
    db_session.commit()
    return department
