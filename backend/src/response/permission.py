from typing import List

from pydantic import BaseModel

from model.permission import Permission


class PermissionItem(BaseModel):
    id: int
    name: str
    description: str = None

    @staticmethod
    def from_model(permission: Permission):
        return PermissionItem(
            id=permission.id,
            name=permission.name,
            description=permission.description,
        )


class PermissionList(BaseModel):
    count: int
    permissions: List[PermissionItem]

    @staticmethod
    def from_model(count: int, permissions: List[Permission]):
        return PermissionList(
            count=count,
            permissions=[PermissionItem.from_model(permission) for permission in permissions]
        )
