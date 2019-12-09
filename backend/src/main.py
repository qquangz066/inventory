import uvicorn as uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request

from api.api import api_router
from core import config
from core.logging import setup_logging
from db.session import Session

setup_logging()
app = FastAPI(
    title=config.PROJECT_NAME,
    openapi_url='/openapi.json' if config.DEBUG else None,
    docs_url='/docs' if config.DEBUG else None,
    redoc_url='/redoc' if config.DEBUG else None
)

# CORS
origins = []

# Set all CORS enabled origins
if config.BACKEND_CORS_ORIGINS:
    origins_raw = config.BACKEND_CORS_ORIGINS.split(",")
    for origin in origins_raw:
        use_origin = origin.strip()
        origins.append(use_origin)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router)


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = Session()
    response = await call_next(request)
    request.state.db.close()
    return response


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
