import { Routes } from '@angular/router';
import { LoanListComponent } from './pages/loan-list/loan-list.component';
import { LoanFormComponent } from './pages/loan-form/loan-form.component';

export const routes: Routes = [
  { path: '', component: LoanListComponent },
  { path: 'new', component: LoanFormComponent }
];
