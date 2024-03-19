from typing import List, Optional
from pydantic import BaseModel

# request input model
class SimulationRequest(BaseModel):
    # define types as any
    x0: float 
    y0: float 
    z0: float 
    sigma: float
    rho: float
    beta: float
    delta_t: float

class SimulationResult(BaseModel):
    x: float | str
    y: float | str
    z: float | str

class SimulationResponse(BaseModel):
    results: List[SimulationResult]
    error: Optional[str] = None