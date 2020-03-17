from dataclasses import dataclass
from typing import Optional

from fastapi import Query
from pydantic import BaseModel


class CreateDepartment(BaseModel):
    name: str
    description: str


@dataclass
class ListDepartment:
    name: Optional[str] = Query(default=None)
    offset: int = None
    limit: int = None
