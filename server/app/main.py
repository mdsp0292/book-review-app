from typing import Union

from fastapi import FastAPI

from app.exceptions.custom_http_exception import CustomHttpException, custom_http_exception_handler

app = FastAPI(title="Book Review APP API")
app.add_exception_handler(CustomHttpException, custom_http_exception_handler)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}