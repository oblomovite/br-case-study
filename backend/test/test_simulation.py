from fastapi.testclient import TestClient
from .main import app

client = TestClient(app)

def test_run__simulation():
    # Define a set of test parameters
    test_params = {
        "x0": 0.0,
        "y0": 1.0,
        "z0": 1.05,
        "sigma": 10.0,
        "rho": 28.0,
        "beta": 2.667,
        "delta_t": 0.01,
        "steps": 20
    }

    # Make a request to the endpoint
    response = client.post("/simulate", json=test_params)

    # Check that the response is successful
    assert response.status_code == 200

    # Check that the response contains the expected data
    data = response.json()
    assert "results" in data
    assert len(data["results"]) == test_params["steps"]

    # Here you can add more specific tests about the content of the results
    # For example, check that the results are a list of dicts with keys 'x', 'y', 'z'
