'''
Logging Middleware Module
'''

import logging
import datetime

base_log = logging.getLogger('base_logger')

class LoggingMiddleware(object):
    """
    Provides full logging of requests and responses
    """
    _initial_http_body = None

    def process_request(self, request):
        """
        Add start time to requests
        """
        self._initial_http_body = request.body

    def process_response(self, request, response):
        """
        Adding request and response logging
        """
        if True:
            msg = "method=%s path=%s status=%s request=%s response=%s"
            args = (request.method,
                    request.path,
                    response.status_code,
                    self._initial_http_body,
                    response.content)
            base_log.info(msg, *args, extra={'tags': {'url': request.build_absolute_uri()}})
        return response
