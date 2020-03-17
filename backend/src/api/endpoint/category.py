from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from api.dependency.security import get_current_active_superuser
from request.category import CreateCategory, ListCategory
from response.category import CategoryList, CategoryItem
from service import category as service

router = APIRouter()


@router.get("/", response_model=CategoryList)
def list(
        request: ListCategory = Depends(),
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    count, categories = service.list(db, request=request)
    return CategoryList.from_model(count, categories)


@router.get("/{id}", response_model=CategoryItem)
def get(
        id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    category = service.get(db, id=id)
    if not category:
        return JSONResponse(status_code=404, content={"message": "The category not found"})
    return CategoryItem.from_model(category)


@router.post("/", response_model=CategoryItem)
def post(
        request: CreateCategory,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    if service.get_by_name(db, name=request.name):
        return JSONResponse(status_code=400, content={"message": "The category is already exists"})
    return CategoryItem.from_model(service.post(db, request=request))
