import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AgentDashboardComponent } from './layouts/agent-dashboard/agent-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { StatisticsComponent } from './layouts/statistics/statistics.component';


const AgentRoutes: Routes = [
  {
    path: '',
    component: AgentComponent
  }
]

@NgModule({
  declarations: [
    AgentDashboardComponent,
    AgentComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AgentRoutes),
  ],
  exports: [
    AgentComponent,
    AgentDashboardComponent
  ]
})
export class AgentModule { }
