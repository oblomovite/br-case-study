from fastapi.testclient import TestClient
from app.main import app  


client = TestClient(app)

def test_run_simulation():

    # define a set of test parameters
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

    # make a request to the endpoint
    response = client.post("/api/simulate", json=test_params)

    # check that the response is successful
    assert response.status_code == 200

    # check that the response contains the expected data
    data = response.json()
    assert "results" in data
    assert len(data["results"]) == test_params["steps"]