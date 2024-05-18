import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isLogging: boolean = false
  constructor(private router: Router) {
  }



  ngOnInit(): void {
    console.log("HEADER COMPOMENT: on init method");
    if(this.router.url.includes("login")) this.isLogging = true
    else this.isLogging = false
  }
}
