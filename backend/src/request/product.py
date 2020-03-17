from dataclasses import dataclass
from datetime import date
from decimal import Decimal
from typing import List, Optional

from fastapi import Query
from pydantic import BaseModel


class CreateProduct(BaseModel):
    category_id: int = None
    department_id: int = None
    name: str = Query(..., min_length=1)
    upc: str
    aisle: str = None
    bay: str = None
    description: str = None
    description_2: str = None
    expiration_count: int = Query(..., ge=0)
    physical_count: int = Query(..., ge=0)
    cost: Decimal = Query(..., ge=0)
    expiration: List[date]


class UpdateProduct(BaseModel):
    category_id: int = None
    department_id: int = None
    name: str = Query(..., min_length=1)
    aisle: str = None
    bay: str = None
    description: str = None
    description_2: str = None
    expiration_count: int = Query(..., ge=0)
    physical_count: int = Query(..., ge=0)
    cost: Decimal = Query(..., ge=0)
    expiration: List[date]


@dataclass
class ListProduct:
    name: Optional[str] = Query(default=None)
    upc: Optional[str] = Query(default=None)
    category_id: Optional[int] = Query(default=None)
    expire_from: Optional[date] = Query(default=None)
    expire_to: Optional[date] = Query(default=None)
    offset: int = Query(default=0)
    limit: int = Query(default=10)
