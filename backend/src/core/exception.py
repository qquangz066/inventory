class CustomException(Exception):
    def __init__(self, code: int = 422, message: str = 'Domain Error'):
        self.code = code
        self.message = message
