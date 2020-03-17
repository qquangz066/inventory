from typing import Optional, List

from sqlalchemy import desc
from sqlalchemy.orm import Session, Query

from core.exception import CustomException
from model.category import Category
from model.department import Department
from model.expiration import Expiration
from model.product import Product
from request.product import CreateProduct, ListProduct, UpdateProduct


def list(session: Session, request: ListProduct) -> (int, List[Product], List[Category]):
    query: Query = session.query(Product)
    if request.name is not None:
        query = query.filter(Product.name.like(f'%{request.name}%'))
    if request.upc is not None:
        query = query.filter(Product.upc.like(f'%{request.upc.strip()}'))
    if request.category_id is not None:
        query = query.filter(Product.category_id == request.category_id)
    if request.expire_from is not None or request.expire_to is not None:
        query = query.join(Expiration)
        if request.expire_from is not None:
            query = query.filter(Expiration.expire >= request.expire_from)
        if request.expire_to is not None:
            query = query.filter(Expiration.expire <= request.expire_to)

    count = query.count()
    products = query.order_by(desc(Product.id)).offset(request.offset).limit(request.limit).all()

    category_ids = [product.category_id for product in products]
    categories = session.query(Category).filter(Category.id.in_(category_ids))

    department_ids = [product.department_id for product in products]
    departments = session.query(Department).filter(Department.id.in_(department_ids))

    return count, products, categories, departments


def get(session: Session, id: int) -> Optional[Product]:
    return session.query(Product).get(id)


def get_by_upc(session: Session, upc: str) -> Optional[Product]:
    return session.query(Product).filter(Product.upc == upc).first()


def delete(session: Session, product: Product):
    session.delete(product)
    session.commit()


def create(session: Session, request: CreateProduct) -> Optional[Product]:
    product = Product(
        category_id=request.category_id,
        department_id=request.department_id,
        name=request.name,
        upc=request.upc,
        aisle=request.aisle,
        bay=request.bay,
        description=request.description,
        description_2=request.description_2,
        expiration_count=request.expiration_count,
        physical_count=request.physical_count,
        cost=request.cost,
        expiration=[Expiration(expire=expire) for expire in request.expiration]
    )
    session.add(product)
    session.commit()
    return product


def update(session: Session, id: int, request: UpdateProduct) -> Optional[Product]:
    product = session.query(Product).get(id)
    if not product:
        raise CustomException(code=400, message='The product not found')

    # category = session.query(Category).get(request.category_id)
    # if not category:
    #     raise CustomException(code=400, message='The category not found')
    #
    # department = session.query(Department).get(request.department_id)
    # if not department:
    #     raise CustomException(code=400, message='The department not found')

    product.category_id = request.category_id
    product.department_id = request.department_id
    product.name = request.name
    product.aisle = request.aisle
    product.bay = request.bay
    product.description = request.description
    product.description_2 = request.description_2
    product.expiration_count = request.expiration_count
    product.physical_count = request.physical_count
    product.cost = request.cost
    product.expiration = [Expiration(expire=expire) for expire in request.expiration]

    session.add(product)
    session.commit()
    return product
