from fastapi import APIRouter
from ...models.simulation_model import equationParameters
from ...services.simulation_service import solve_equation

router = APIRouter()

# Define the endpoint for the simulation
@router.post("/simulate/", response_model=list)
def solver(params: equationParameters):
    return solve_equation(params)
