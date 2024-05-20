import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';



const clientDashRoutes: Routes = [
{
  path: '',
  component:ClientDashboardComponent

}];

@NgModule({
  declarations: [ClientDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(clientDashRoutes),
    UiComponentsModule,
    ReactiveFormsModule,
    SharedModule,
],
  exports: [ClientDashboardComponent]
})
export class DashboardModule { }
