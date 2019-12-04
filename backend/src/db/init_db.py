# make sure all SQL Alchemy models are imported before initializing DB
# otherwise, SQL Alchemy might fail to initialize properly relationships
# for more details: https://github.com/tiangolo/full-stack-fastapi-postgresql/issues/28
# from db import base
from db import base
from core.security import get_password_hash
from model.user import User
from service import user as user_service


def init_db(db_session):
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next line
    # Base.metadata.create_all(bind=engine)

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
