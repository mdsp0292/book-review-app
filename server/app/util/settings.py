from pydantic.v1 import BaseSettings


class Settings(BaseSettings):
    is_dev_env: bool = False

    db_host: str | None = None
    db_name: str | None = None
    db_user_name: str | None = None
    db_password: str | None = None


settings = Settings()
