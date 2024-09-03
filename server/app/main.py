from fastapi import FastAPI, APIRouter
from starlette.responses import RedirectResponse

from api import products
from exceptions.custom_http_exception import CustomHttpException, custom_http_exception_handler
from db import database

app = FastAPI(title="Book Review APP API")
app.add_exception_handler(CustomHttpException, custom_http_exception_handler)

# API routes
v1_router = APIRouter()
v1_router.include_router(products.router, prefix='/v1', tags=['Products'])

app.include_router(v1_router)
# database.create_tables()


@app.get("/", include_in_schema=False)
def read_root():
    """
    Redirect to Docs page
    :return:
    """
    return RedirectResponse(url='/docs')
