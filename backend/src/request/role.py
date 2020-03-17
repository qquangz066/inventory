from dataclasses import dataclass
from typing import Optional

from fastapi import Query
from pydantic import BaseModel


class CreateRole(BaseModel):
    name: str
    description: str


@dataclass
class ListRole:
    name: Optional[str] = Query(default=None)
    offset: int = None
    limit: int = None
