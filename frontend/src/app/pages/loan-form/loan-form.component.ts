import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loan-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {
  borrowerName = '';
  repaymentAmount = 0;
  fundingAmount = 0;

  constructor(private loanService: LoanService) {}

  createLoan() {
    const newLoan = {
      borrower_name: this.borrowerName,
      repayment_amount: this.repaymentAmount,
      funding_amount: this.fundingAmount
    };
    this.loanService.createLoan(newLoan).subscribe(() => {
      alert('Loan created successfully!');
    });
  }
}
