from fastapi import APIRouter

router = APIRouter()



@router.get('/products')
def get_products_list():
    try:
        return {"item_id": "items" }
    except Exception as error:
        raise Exception

