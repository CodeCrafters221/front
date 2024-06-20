import { Component } from '@angular/core';

@Component({
  selector: 'app-card-pie',
  templateUrl: './card-pie.component.html',
  styleUrl: './card-pie.component.scss'
})
export class CardpieComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Solvabilite calculee par l'assistant IA"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 96 },
		  { y: 4 },
		]
	  }]
	}	
}
