from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from api.dependency.db import get_db
from api.dependency.security import get_current_active_user
from request.product import ListProduct, CreateProduct, UpdateProduct
from response.product import ProductList, ProductItem
from service import category as category_service
from service import department as department_service
from service import product as service

router = APIRouter()


@router.get("/", response_model=ProductList)
def list(
        request: ListProduct = Depends(),
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_user),

):
    count, products, categories, departments = service.list(db, request=request)
    return ProductList.from_model(count, products, categories, departments)


@router.get("/{id}", response_model=ProductItem)
def get(
        id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_user),
):
    product = service.get(db, id=id)
    if not product:
        return JSONResponse(status_code=404, content={"message": "The product not found"})
    return ProductItem.from_model(product, product.category, product.department)


@router.get("/upc/{upc}", response_model=ProductItem)
def get_by_upc(
        upc: str,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_user),
):
    product = service.get_by_upc(db, upc=upc)
    if not product:
        return JSONResponse(status_code=404, content={"message": "The product not found"})
    return ProductItem.from_model(product, product.category, product.department)


@router.post("/", response_model=ProductItem)
def post(
        request: CreateProduct,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_user),
):
    product = service.get_by_upc(db, upc=request.upc)
    if product:
        return JSONResponse(status_code=400, content={"message": "The upc is already exists"})

    # category = category_service.get(db, id=request.category_id)
    # if not category:
    #     return JSONResponse(status_code=404, content={"message": "The category not found"})
    #
    # department = department_service.get(db, id=request.department_id)
    # if not department:
    #     return JSONResponse(status_code=404, content={"message": "The department not found"})

    product = service.create(db, request=request)
    return ProductItem.from_model(product, product.category, product.department)


@router.put("/{id}", response_model=ProductItem)
def put(
        id: int,
        request: UpdateProduct,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_user),
):
    product = service.update(db, id=id, request=request)
    return ProductItem.from_model(product, product.category, product.department)


@router.delete("/{id}")
def delete(
        id: int,
        db: Session = Depends(get_db),
        current_user=Depends(get_current_active_user),
):
    product = service.get(db, id=id)
    if not product:
        return JSONResponse(status_code=404, content={"message": "The product not found"})

    service.delete(db, product=product)
    return JSONResponse(status_code=200, content={"message": "Deleted successfully"})
