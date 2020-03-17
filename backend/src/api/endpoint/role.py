from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from api.dependency.security import get_current_active_superuser
from request.role import CreateRole, ListRole
from response.role import RoleList, RoleItem
from service import role as service

router = APIRouter()


@router.get("/", response_model=RoleList)
def list(
        request: ListRole = Depends(),
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    count, roles = service.list(db, request=request)
    return RoleList.from_model(count, roles)


@router.get("/{id}", response_model=RoleItem)
def get(
        id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    role = service.get(db, id=id)
    if not role:
        return JSONResponse(status_code=404, content={"message": "The Role not found"})
    return RoleItem.from_model(role)


@router.post("/", response_model=RoleItem)
def post(
        request: CreateRole,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    if service.get_by_name(db, name=request.name):
        return JSONResponse(status_code=400, content={"message": "The Role is already exists"})
    return RoleItem.from_model(service.post(db, request=request))
