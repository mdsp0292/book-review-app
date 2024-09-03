from pydantic.v1 import BaseSettings


class Settings(BaseSettings):
    is_dev_env: bool = False

    app_title: str = "Book Review API"
    postgres_server: str | None = None
    postgres_db_port: int = 5432
    postgres_db_name: str | None = None
    postgres_db_user: str | None = None
    postgres_db_password: str | None = None

    @property
    def database_url(self) -> str:
        return f"postgresql://{self.postgres_db_user}:{self.postgres_db_password}@{self.postgres_server}:{self.postgres_db_port}/{self.postgres_db_name}"  # noqa


settings = Settings()
