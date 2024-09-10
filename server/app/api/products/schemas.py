from pydantic import BaseModel, Field


class ProductCreate(BaseModel):
    title: str = Field(..., min_length=1)
    author: str = Field(..., min_length=1)
    publish_date: str | None = None


class ProductRead(BaseModel):
    id: int
    title: str
    author: str
    publish_date: str | None = None
