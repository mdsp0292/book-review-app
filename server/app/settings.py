from pydantic.v1 import BaseSettings


class Settings(BaseSettings):
    is_dev_env: bool = False


settings = Settings()
