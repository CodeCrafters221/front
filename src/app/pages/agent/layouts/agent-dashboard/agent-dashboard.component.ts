
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoan } from 'app/models/loan.models';







@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrl: './agent-dashboard.component.scss'
})
export class AgentDashboardComponent implements OnInit {

  allLoans!: ILoan[]
  approvedLoans: number|string =0
  rejectedLoans: number|string =0
  pendingLoans:  number|string =0
  approvalRate: number|string =0
areLoansReadyForTesting: boolean = false; // FOR TESTING PURPOSES

  constructor (private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe((loansData) => {
      console.log('AGENT DASHBORD: all loans from resolvers',loansData);
      this.allLoans = loansData['loans'] as ILoan[]
      if(!this.allLoans.length){
        this.approvedLoans = 0
        this.rejectedLoans = 0
        this.pendingLoans = 0
      }
      this.approvedLoans = this.allLoans.filter((loan) => loan.status === 'APPROVED').length
      this.rejectedLoans = this.allLoans.filter((loan) => loan.status === 'REJECTED').length
      this.pendingLoans = this.allLoans.filter((loan) => loan.status === 'PENDING').length
      this.approvalRate = ((this.approvedLoans/this.allLoans.length)*100).toString() + '%'
    })
  }


}
