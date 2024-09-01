import traceback
from typing import Any, Optional, Dict

from fastapi import status, Request
from fastapi.encoders import jsonable_encoder
from fastapi.logger import logger
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException

from app.settings import settings


class CustomHttpException(HTTPException):
    def __init__(
            self,
            status_code: int = status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail: Any = "Unknown Server Error",
            error: Any = None,
            headers: Optional[Dict[str, Any]] = None,
    ) -> None:
        if headers is None:
            headers = {}

        headers["X-Error"] = str(error)
        headers["Trace"] = traceback.format_exc()
        super().__init__(status_code=status_code, detail=detail, headers=headers)

        logger.exception(f"{detail}: {error}")


async def custom_http_exception_handler(_request: Request, exception: CustomHttpException):
    if settings.is_dev_env:
        response = jsonable_encoder({"message": exception.detail, "details": exception})
    else:
        response = jsonable_encoder({"message": exception.detail})
    return JSONResponse(status_code=exception.status_code, content=response)
