import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UiComponentsModule } from 'app/ui-components/ui-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { ClientComponent } from './client.component';


const Clientroutes: Routes = [
  // client views
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
]

@NgModule({
  declarations: [DashboardComponent, ClientComponent],
  imports: [
    RouterModule.forChild(Clientroutes),
    UiComponentsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ],
  exports: [DashboardComponent, ClientComponent]
})
export class ClientModule { }
