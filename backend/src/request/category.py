from dataclasses import dataclass
from typing import Optional

from fastapi import Query
from pydantic import BaseModel


class CreateCategory(BaseModel):
    name: str
    description: str


@dataclass
class ListCategory:
    name: Optional[str] = Query(default=None)
    offset: int = None
    limit: int = None
