from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Angular default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple in-memory storage
loans = {}

# Loan model
class Loan(BaseModel):
    borrower_name: str
    repayment_amount: float
    funding_amount: float

@app.post("/loans/")
def create_loan(loan: Loan):
    loan_id = str(uuid.uuid4())
    loans[loan_id] = loan.dict()
    return {"loan_id": loan_id, **loan.dict()}

@app.get("/loans/{loan_id}")
def get_loan(loan_id: str):
    loan = loans.get(loan_id)
    if loan is None:
        raise HTTPException(status_code=404, detail="Loan not found")
    return {"loan_id": loan_id, **loan}

@app.get("/borrower/{borrower_name}")
def get_loans_by_borrower(borrower_name: str):
    results = [{"loan_id": id, **data} for id, data in loans.items() if data["borrower_name"] == borrower_name]
    if not results:
        raise HTTPException(status_code=404, detail="No loans found for this borrower")
    return results

@app.delete("/loans/{loan_id}")
def delete_loan(loan_id: str):
    if loan_id in loans:
        del loans[loan_id]
        return {"message": "Loan deleted successfully"}
    raise HTTPException(status_code=404, detail="Loan not found")

@app.get("/loans/")
def get_all_loans():
    return [{"loan_id": id, **data} for id, data in loans.items()]
