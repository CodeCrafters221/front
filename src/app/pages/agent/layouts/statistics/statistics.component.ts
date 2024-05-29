import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  // default values for testing purposes
@Input() title: string = "PRÊTS APPROUVÉS";
@Input() total: number|string = 7;
@Input() icon!: string

}
