from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from api.dependency.security import get_current_active_superuser
from request.department import CreateDepartment, ListDepartment
from response.department import DepartmentList, DepartmentItem
from service import department as service

router = APIRouter()


@router.get("/", response_model=DepartmentList)
def list(
        request: ListDepartment = Depends(),
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    count, departments = service.list(db, request=request)
    return DepartmentList.from_model(count, departments)


@router.get("/{id}", response_model=DepartmentItem)
def get(
        id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    department = service.get(db, id=id)
    if not department:
        return JSONResponse(status_code=404, content={"message": "The Department not found"})
    return DepartmentItem.from_model(department)


@router.post("/", response_model=DepartmentItem)
def post(
        request: CreateDepartment,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    if service.get_by_name(db, name=request.name):
        return JSONResponse(status_code=400, content={"message": "The Department is already exists"})
    return DepartmentItem.from_model(service.post(db, request=request))
