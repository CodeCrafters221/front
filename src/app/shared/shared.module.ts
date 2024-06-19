import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardSocialTraficComponent } from './components/cards/card-social-trafic/card-social-trafic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { HeaderStatComponent } from './components/headers/header-stat/header-stat.component';
import { FooterClientComponent } from './components/footers/footer-client/footer-client.component';
import { NavbarComponent } from './components/navbar/user-navbar/navbar.component';
import { NotificationDropdownComponent } from './components/dropdown/notification-dropdown/notification-dropdown.component';
import { UserDropdownComponent } from './components/dropdown/user-dropdown/user-dropdown.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import { MainComponent } from './components/main/main.component';
import { MarkdownPipe } from 'app/pipes/markdown.pipe';


export const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatSliderModule
]


@NgModule({
  declarations: [
    MarkdownPipe,
    SidebarComponent,
    CardLineChartComponent,
    CardBarChartComponent,
    CardPageVisitsComponent,
    CardSocialTraficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatComponent,
    FooterClientComponent,
    NavbarComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
...MAT_MODULES
  ],
  exports:[
    ...MAT_MODULES,
    SidebarComponent,
    CardLineChartComponent,
    CardBarChartComponent,
    CardPageVisitsComponent,
    CardSocialTraficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatComponent,
    FooterClientComponent,
    NavbarComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    MainComponent,
    MarkdownPipe,
  ]
})
export class SharedModule {

}
