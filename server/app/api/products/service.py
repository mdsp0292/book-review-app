from http.client import HTTPException

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from db.session import get_db
from db.models import Product

from exceptions.custom_http_exception import CustomHttpException

router = APIRouter()


@router.get('/products')
def get_products_list(db: Session = Depends(get_db)):
    try:
        return db.query(Product).all()
    except Exception as error:
        raise CustomHttpException(
            detail="Something went wrong. Please try again or contact support",
            error=error
        )
