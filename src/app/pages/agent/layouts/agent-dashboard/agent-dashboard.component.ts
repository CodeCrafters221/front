
import { Component, OnInit } from '@angular/core';
import { LoanService } from 'app/services/loan/loan.service';







@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrl: './agent-dashboard.component.scss'
})
export class AgentDashboardComponent implements OnInit {


  constructor (private loanService: LoanService) { }


  ngOnInit(): void {
    
  }


}
