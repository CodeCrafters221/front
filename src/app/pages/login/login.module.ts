import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { MAT_MODULES } from '../../app.module';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedComponentsModule,
    ...MAT_MODULES,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }