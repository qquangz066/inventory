# make sure all SQL Alchemy models are imported before initializing DB
# otherwise, SQL Alchemy might fail to initialize properly relationships
# for more details: https://github.com/tiangolo/full-stack-fastapi-postgresql/issues/28
# from db import base
import csv

from sqlalchemy.orm import Session

from core.security import get_password_hash
from model.category import Category
from model.department import Department
from model.product import Product
from model.user import User
from service import user as user_service
from .base import Base

Base()


def init_db(db_session: Session):
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next line
    # Base.metadata.create_all(bind=engine)
    # user
    user = user_service.get_by_email(db_session, email='admin@gmail.com')
    if not user:
        user = User(
            email='admin@gmail.com',
            hashed_password=get_password_hash('admin'),
            name='admin',
            is_superuser=True,
        )
        db_session.add(user)
        db_session.commit()

    with open('data.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line = 0
        for row in csv_reader:
            print(f'--- {line} {row[0]} {row[1]} {row[5]} {row[6]}')
            try:
                product = Product()
                product.upc = row[0]
                product.name = row[1]
                if row[5]:
                    category = db_session.query(Category).filter(Category.name == row[5]).first()
                    if not category:
                        category = Category(name=row[5])
                        db_session.add(category)
                        db_session.commit()
                    product.category_id = category.id

                if row[6]:
                    department = db_session.query(Department).filter(Department.name == row[6]).first()
                    if not department:
                        department = Department(name=row[6])
                        db_session.add(department)
                        db_session.commit()
                    product.department_id = department.id

                db_session.add(product)
                db_session.commit()
            except Exception as e:
                print(e)
                db_session.rollback()
            line += 1
