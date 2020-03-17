from fastapi import APIRouter

from api.endpoint import login, users, category, product, department

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(category.router, prefix="/categories", tags=["categories"])
api_router.include_router(department.router, prefix="/departments", tags=["departments"])
api_router.include_router(product.router, prefix="/products", tags=["products"])
