from typing import List

from db.models import Product
from db.session import get_db
from api.products import schemas
from exceptions.custom_http_exception import CustomHttpException
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette import status

router = APIRouter()


@router.get('/products', response_model=List[schemas.ProductRead])
def get_products_list(db: Session = Depends(get_db)):
    try:
        return db.query(Product).all()
    except Exception as error:
        raise CustomHttpException(
            detail="Something went wrong. Please try again or contact support",
            error=error
        )


@router.get('/products/{product_id}', response_model=schemas.ProductRead)
def get_products_list(product_id: int, db: Session = Depends(get_db)):
    try:
        db_product = db.query(Product).filter(Product.id == product_id).first()
        if db_product is None:
            raise CustomHttpException(status_code=404, detail="Order not found")
        return db_product
    except Exception as error:
        raise CustomHttpException(
            detail="Something went wrong. Please try again or contact support",
            error=error
        )


@router.post('/products', response_model=schemas.ProductCreate, status_code=status.HTTP_201_CREATED)
def create_product(
        product: schemas.ProductCreate,
        db: Session = Depends(get_db)
):
    product_to_create = Product(
        title=product.title,
        author=product.author,
        publish_date=product.publish_date,
    )

    db_product_create = db.query(Product).filter(Product.title == product_to_create.title).first()
    if db_product_create is not None:
        raise CustomHttpException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Book {product_to_create.title} already exist"
        )

    try:
        db.add(product_to_create)
        db.commit()

        return product_to_create
    except Exception as error:
        raise CustomHttpException(
            detail="Something went wrong. Please try again or contact support",
            error=error
        )
