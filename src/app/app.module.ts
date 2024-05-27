import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


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
  
  ],
  providers: [
    AuthService,
    provideClientHydration(),
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
