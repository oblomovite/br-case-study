# exceptions.py

class CalculationError(Exception):
    def __init__(self, message: str):
        self.message = message

class DivisionByZeroError(CalculationError):
    pass

class InfiniteValueError(CalculationError):
    pass
