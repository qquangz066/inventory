from typing import List

from pydantic import BaseModel

from model.department import Department


class DepartmentItem(BaseModel):
    id: int
    name: str
    description: str = None

    @staticmethod
    def from_model(department: Department):
        return DepartmentItem(
            id=department.id,
            name=department.name,
            description=department.description,
        )


class DepartmentList(BaseModel):
    count: int
    departments: List[DepartmentItem]

    @staticmethod
    def from_model(count: int, departments: List[Department]):
        return DepartmentList(
            count=count,
            departments=[DepartmentItem.from_model(department) for department in departments]
        )
