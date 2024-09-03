from pydantic import BaseModel


class ProductCreate(BaseModel):
    title: str
    author: str
    publish_date: str | None = None


class ProductRead(BaseModel):
    id: int
    title: str
    author: str
    publish_date: str | None = None
