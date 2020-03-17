from typing import List

from pydantic import BaseModel

from model.role import Role


class RoleItem(BaseModel):
    id: int
    name: str
    description: str = None

    @staticmethod
    def from_model(role: Role):
        return RoleItem(
            id=role.id,
            name=role.name,
            description=role.description,
        )


class RoleList(BaseModel):
    count: int
    roles: List[RoleItem]

    @staticmethod
    def from_model(count: int, roles: List[Role]):
        return RoleList(
            count=count,
            roles=[RoleItem.from_model(role) for role in roles]
        )
