import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AgentDashboardComponent } from './layouts/agent-dashboard/agent-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { StatisticsComponent } from './layouts/statistics/statistics.component';
import { agentResolver } from './resolvers/agent.resolver';


const agentRoutes: Routes = [

  {
    path: '',
    component: AgentComponent,
    children: [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: AgentDashboardComponent,
        // resolve: {
        //   loans: agentResolver
        // },
      },
    ]
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
    RouterModule.forChild(agentRoutes),
  ],
  exports: [
    AgentComponent,
    AgentDashboardComponent
  ]
})
export class AgentModule { }
