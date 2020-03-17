from datetime import date
from decimal import Decimal
from typing import List

from pydantic import BaseModel

from model.category import Category
from model.department import Department
from model.product import Product


class CategoryItem(BaseModel):
    id: int
    name: str
    description: str = None


class DepartmentItem(BaseModel):
    id: int
    name: str
    description: str = None


class ProductItem(BaseModel):
    id: int
    name: str
    upc: str
    aisle: str = None
    bay: str = None
    description: str = None
    description_2: str = None
    expiration_count: int
    physical_count: int
    cost: Decimal
    category: CategoryItem = None
    department: DepartmentItem = None
    expiration: List[date]

    @staticmethod
    def from_model(product: Product, category: Category, department: Department):
        return ProductItem(
            id=product.id,
            name=product.name,
            upc=product.upc,
            aisle=product.aisle,
            bay=product.bay,
            description=product.description,
            description_2=product.description_2,
            expiration_count=product.expiration_count,
            physical_count=product.physical_count,
            cost=product.cost,
            category=CategoryItem(
                id=category.id,
                name=category.name,
                description=category.description
            ) if category else None,
            department=DepartmentItem(
                id=department.id,
                name=department.name,
                description=department.description
            ) if department else None,
            expiration=[expire.expire for expire in product.expiration]
        )


class ProductList(BaseModel):
    count: int
    products: List[ProductItem]

    @staticmethod
    def from_model(count: int, products: List[Product], categories: List[Category], departments: List[Department]):
        categories_dict = {category.id: category for category in categories}
        departments_dict = {department.id: department for department in departments}
        return ProductList(
            count=count,
            products=[
                ProductItem.from_model(
                    product, categories_dict.get(product.category_id), departments_dict.get(product.department_id)
                ) for product in products
            ]
        )
