from pydantic import BaseModel

class equationParameters(BaseModel):
    x0: float
    y0: float
    z0: float
    sigma: float
    rho: float
    beta: float
    delta_t: float
