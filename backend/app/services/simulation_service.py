from ..models.simulation_model import equationParameters

# Define the function to solve the equations
def solve_equation(params: equationParameters):
    results = []
    x, y, z = params.x0, params.y0, params.z0
    
    for _ in range(params.steps):

        x_dot = params.sigma * (y - x)
        y_dot = x * (params.rho - z) - y
        z_dot = x * y - params.beta * z

        x = x + x_dot * params.delta_t
        y = y + y_dot * params.delta_t
        z = z + z_dot * params.delta_t

        results.append({"x": x, "y": y, "z": z})
    
    return results
