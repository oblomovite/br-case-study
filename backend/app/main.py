import logging
from app.utils.exceptions import DivisionByZeroError, InfiniteValueError
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .api.endpoints.simulation import router as simulation_router

# configure logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s',
                    filename='app.log',  
                    filemode='a')  


# Create the FastAPI app
app = FastAPI()

# add CORS middleware - this is needed to allow the frontend to make requests to the backend
# nb. only use this for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)

# add exception handlers specific to the simulation
@app.exception_handler(DivisionByZeroError)
async def division_by_zero_exception_handler(request, exc: DivisionByZeroError):
    return JSONResponse(
        status_code=200,
        content={"message": exc.message},
    )

@app.exception_handler(InfiniteValueError)
async def infinite_value_exception_handler(request, exc: InfiniteValueError):
    return JSONResponse(
        status_code=200,
        content={"message": exc.message},
    )

# Include the router in the app
app.include_router(simulation_router, prefix="/api")