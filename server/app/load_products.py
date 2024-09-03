from pydoc import describe

import requests
from sqlalchemy.orm import Session

from db.session import get_db
from api.products.utils import create_product
from api.products.schemas import ProductCreate


def get_books_from_api(total_books_count: int = 20):
    response = requests.get("https://openlibrary.org/search.json?author=tolkien&sort=new")
    books_processed = 0
    books = []
    for data in response.json()["docs"]:
        if books_processed > total_books_count:
            break
        books.append({
            "title": data["title"],
            "author": ','.join(data['author_name']),
            "publish_date": data['publish_date'][0],
        })
        books_processed += 1
    return books


def load_products(db_session: Session):
    books = get_books_from_api()
    for book in books:
        create_product(db_session, ProductCreate(**book))

    print(f"Inserted total {len(books)} books in products table")


if __name__ == '__main__':
    db = next(get_db())

    load_products(db)
