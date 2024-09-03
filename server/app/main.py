from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse

from api.products import service as products_service
from exceptions.custom_http_exception import CustomHttpException, custom_http_exception_handler
from util.settings import settings


def init_app():
    api_app = FastAPI(title=settings.app_title, version="1.0.0")
    api_app.add_exception_handler(CustomHttpException, custom_http_exception_handler)

    api_app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # API routes
    v1_router = APIRouter()
    v1_router.include_router(products_service.router, prefix='/v1', tags=['Products'])

    api_app.include_router(v1_router)
    return api_app


app = init_app()


@app.get("/", include_in_schema=False)
def read_root():
    """
    Redirect to Docs page
    :return:
    """
    return RedirectResponse(url='/docs')
