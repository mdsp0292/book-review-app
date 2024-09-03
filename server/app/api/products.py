from fastapi import APIRouter

router = APIRouter()


@router.get('/products')
def get_products_list():
    try:
        return {"ping": "pong"}
    except Exception as error:
        raise Exception
