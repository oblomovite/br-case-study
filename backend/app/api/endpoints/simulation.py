from fastapi import APIRouter, HTTPException
from typing import List
from app.models.simulation_model import SimulationRequest, SimulationResponse
from ...services.simulation_service import solve_equation

router = APIRouter()

# define a route for the simulation
@router.post("/simulate", response_model=SimulationResponse)
async def solver(params: SimulationRequest):
    try:
        results = solve_equation(params)
        return results
    except Exception as e: 
        raise HTTPException(status_code=400, detail=str(e))
