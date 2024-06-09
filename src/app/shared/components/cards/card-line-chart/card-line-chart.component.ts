import { Component, OnInit, AfterViewInit  } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-card-line-chart',
  templateUrl: './card-line-chart.component.html',
  styleUrls: ['./card-line-chart.component.scss']
})
export class CardLineChartComponent  implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const config = {
      type: "line", 
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "retrait/depot",
            fill: false,
            backgroundColor: "#06b6d4",
            borderColor: "#06b6d4",
            data: [1560, 2310, 1700.20, 2500, 998, 100],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "#06b6d4",
        },
        legend: {
          labels: {
            fontColor: "#06b6d4",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              color: "#06b6d4",
            },
            display: true,
            title: {
              display: false,
              text: "Month",
              color: "#06b6d4",
            },
            grid: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "#06b6d4",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
          y: {
            ticks: {
              color: "#06b6d4",
            },
            display: true,
            title: {
              display: false,
              text: "Value",
              color: "#06b6d4",
            },
            grid: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        },
      },
    };
    let ctx: any = document.getElementById("line-chart") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    new Chart(ctx, config as any);
  }  

}