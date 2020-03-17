from fastapi import Query
from pydantic import BaseModel


class CreateUser(BaseModel):
    name: str = Query(..., min_length=3)
    email: str = Query(..., min_length=6)
    password: str = Query(..., min_length=3)
