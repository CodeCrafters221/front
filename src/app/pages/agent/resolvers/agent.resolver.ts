
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ILoan } from 'app/models/loan.models';
import { LoanService } from 'app/services/loan/loan.service';

export const agentResolver: ResolveFn<ILoan[]|null> = async (route, state, loanService: LoanService = inject(LoanService)) => {
  
    const loans = await loanService.getAllLoans();
    console.log('AGENT RESOLVER: loans: ', loans, route.params);
    return loans
};
