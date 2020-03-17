from typing import List

from pydantic import BaseModel

from model.user import User


class UserItem(BaseModel):
    id: int
    name: str
    email: str
    is_active: bool
    is_superuser: bool

    @staticmethod
    def from_model(user: User):
        return UserItem(
            id=user.id,
            name=user.name,
            email=user.email,
            is_active=user.is_active,
            is_superuser=user.is_superuser
        )


class UserList(BaseModel):
    count: int
    users: List[UserItem]

    @staticmethod
    def from_model(count: int, users: List[User]):
        return UserList(
            count=count,
            users=[UserItem.from_model(user) for user in users]
        )
