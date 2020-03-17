from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from api.dependency.security import get_current_active_superuser
from request.permission import CreatePermission, ListPermission
from response.permission import PermissionList, PermissionItem
from service import permission as service

router = APIRouter()


@router.get("/", response_model=PermissionList)
def list(
        request: ListPermission = Depends(),
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    count, permissions = service.list(db, request=request)
    return PermissionList.from_model(count, permissions)


@router.get("/{id}", response_model=PermissionItem)
def get(
        id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    permission = service.get(db, id=id)
    if not permission:
        return JSONResponse(status_code=404, content={"message": "The Permission not found"})
    return PermissionItem.from_model(permission)


@router.post("/", response_model=PermissionItem)
def post(
        request: CreatePermission,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_superuser),
):
    if service.get_by_name(db, name=request.name):
        return JSONResponse(status_code=400, content={"message": "The Permission is already exists"})
    return PermissionItem.from_model(service.post(db, request=request))
