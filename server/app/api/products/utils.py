from api.products.schemas import ProductCreate
from db.models import Product


def create_product(db, product_obj: ProductCreate):
    product = Product(**product_obj.dict())
    db.add(product)
    db.commit()
    return product
