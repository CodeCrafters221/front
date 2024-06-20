import { Component, Input } from '@angular/core';
import { MenuItem } from 'app/models/menu.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @Input() navBarTitle!: string;
  @Input() sideMenu!: MenuItem[];

}
