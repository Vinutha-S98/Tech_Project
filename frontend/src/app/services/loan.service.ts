import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8000'; // Matches the FastAPI backend's default port

  constructor(private http: HttpClient) {}

  createLoan(loan: Omit<Loan, 'loan_id'>): Observable<Loan> {
    return this.http.post<Loan>(`${this.apiUrl}/loans/`, loan);
  }

  getLoan(loanId: string): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/loans/${loanId}`);
  }

  getLoansByBorrower(borrowerName: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.apiUrl}/borrower/${borrowerName}`);
  }

  deleteLoan(loanId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/loans/${loanId}`);
  }

  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.apiUrl}/loans/`);
  }
}
