import { Component } from '@angular/core';

@Component({
  selector: 'app-card-doghnuts',
  templateUrl: './card-doghnuts.component.html',
  styleUrl: './card-doghnuts.component.scss'
})
export class CardDoghnutsComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: ""
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 30, name: "Caractere" },
		  { y: 12, name: "Capital" },
		  { y: 22, name: "Capacite" },
		  { y: 17, name: "Conditions" },
		  { y: 25, name: "Garanties" },
		  { y: 19, name: "Non Assignee" },
		]
	  }]
	}	
}
