import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent  implements OnInit {
@Input() title: string = 'Mon Compte';
  constructor() {}

  ngOnInit(): void {}
}
