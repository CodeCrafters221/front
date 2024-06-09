import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { UiComponentsModule } from 'app/ui-components/ui-components.module';
import { AiAssistantConfigsComponent } from './layouts/ai-assistant-configs/ai-assistant-configs.component';

const adminRoutes: Routes = [
  // admin views
  {
    path: '',
    component: AdminComponent,
    children: [
      /** @todo */
      // { path: "dashboard", component: AdminDashboardComponent },
      { path: "", redirectTo: "ai-assistant-configs", pathMatch: "full" },
      {path: 'ai-assistant-configs', component: AiAssistantConfigsComponent},
    ],
  },
]


@NgModule({
  declarations: [
    AdminComponent,
    AiAssistantConfigsComponent,
  ],
  imports: [
    RouterModule.forChild(adminRoutes),
    UiComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    AdminComponent,
    AiAssistantConfigsComponent
  ]
})
export class AdminModule { }
