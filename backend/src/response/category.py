from typing import List

from pydantic import BaseModel

from model.category import Category


class CategoryItem(BaseModel):
    id: int
    name: str
    description: str = None

    @staticmethod
    def from_model(catagory: Category):
        return CategoryItem(
            id=catagory.id,
            name=catagory.name,
            description=catagory.description,
        )


class CategoryList(BaseModel):
    count: int
    categories: List[CategoryItem]

    @staticmethod
    def from_model(count: int, categories: List[Category]):
        return CategoryList(
            count=count,
            categories=[CategoryItem.from_model(catagory) for catagory in categories]
        )
