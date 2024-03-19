from app.models.simulation_model import SimulationRequest, SimulationResponse, SimulationResult
import logging

logger = logging.getLogger(__name__)

def solve_equation(params: SimulationRequest) -> SimulationResponse:
    results = []
    x, y, z = params.x0, params.y0, params.z0
    error_message = ""

    # make sure delta_t is not zero, 
    # nb. this is an assumption on my part as there are no constraints given in the problem statement
    if params.delta_t == 0:
        error_message = "delta_t cannot be zero."
        logger.error(error_message)
        return SimulationResponse(results=results, error_message=error_message)

    # run the simulation
    for step in range(20):
        x_dot = params.sigma * (y - x)
        y_dot = x * (params.rho - z) - y
        z_dot = x * y - params.beta * z

        x += x_dot * params.delta_t
        y += y_dot * params.delta_t
        z += z_dot * params.delta_t

        # check if any parameter goes to infinity or becomes NaN and break if they do
        if not all(map(lambda val: val == val and abs(val) != float('inf'), [x, y, z])):
            error_message = f"Calculation resulted in an invalid value at step {step + 1}: x={x}, y={y}, z={z}"
            logger.error(error_message)
            break  

        results.append(SimulationResult(x=x, y=y, z=z))

    if not error_message:
        logger.info(f"Simulation completed successfully with {len(results)} results.")
    else:
        logger.info(f"Simulation completed with {len(results)} results, but encountered an error: {error_message}")

    return SimulationResponse(results=results, error=error_message if error_message else None)
