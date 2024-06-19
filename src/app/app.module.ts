import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgentModule } from './pages/agent/agent.module';
import { LoanService } from './services/loan/loan.service';
import { AdminModule } from './pages/admin/admin.module';
import { LoadingInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    UiComponentsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AgentModule,
    AdminModule

  ],
  providers: [
    AuthService,
    LoanService,
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
