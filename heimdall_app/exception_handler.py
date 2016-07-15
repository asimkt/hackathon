from rest_framework.views import exception_handler
from heimdall_app.response import ErrorResponse, SuccessResponse
import logging


error_logger = logging.getLogger('error_logger')


class CustomExceptionHandler(object):
    """
    Custom Exception Handler
    """
    def __new__(self, exc, context):
        response = exception_handler(exc, context)
        error_logger.error(exc)
        if response is not None:
            return ErrorResponse(status=response.status_code,
                                 message=exc.message)
        return ErrorResponse(message="An unexpected error occurred. Please try again.")
