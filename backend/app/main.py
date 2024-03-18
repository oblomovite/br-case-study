from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.endpoints.simulation import router as simulation_router

app = FastAPI()

# Define the list of origins that are allowed to make requests to the API
# necessary to avoid CORS issues
origins = [
    "http://localhost:3000",  
    "http://127.0.0.1:3000"
]

# NB. This is a security risk in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Create the FastAPI app
app = FastAPI()

# Include the router in the app
app.include_router(simulation_router, prefix="/api")