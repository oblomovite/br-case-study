# Instructions to setup and run this project

## Install the dependencies

```shell
cd backend & python -m venv .venv & source .venv/bin/activate & pip install -r requirements.txt
cd frontend & npm install
```

## Run the app

```shell
cd frontend & npm run dev
```

Then open a second terminal and run:

```shell
cd backend & uvicorn app.main:app --reload --port 8000
```

## Run the tests

### Frontend

```shell
cd frontend & npm run test
```

### Backend

```shell
cd backend & pytest
```

## Display API documentation & Schema

Ensure the backend is running and open your browser to `http://localhost:8000/docs`
