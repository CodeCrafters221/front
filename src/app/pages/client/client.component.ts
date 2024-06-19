import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'app/models/menu.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent {
  navBarTitle!: string;

  sideMenu: MenuItem[] = [
    {title: 'Mon Compte', url: '/client/dashboard', icon: 'fa-circle-user'},
    {title: 'Demander un prêt', url: '/client/apply-loan', icon: 'fa-hand-holding-dollar'},
    {title: 'Ai Interview', url: '/client/ai-interview', icon: 'fa-robot'},
    {title: 'Suivi de mes prêts', url: '/client/view-loan', icon: 'fa-sack-dollar'},
    {title: 'Rembourser un prêt', url: '/client/pay-loan', icon: 'fa-money-bills'},
    {title: 'Messagerie', url: '/client/messaging', icon: 'fa-envelope'},
    {title: 'Paramètre', url: '/client/settings', icon: 'fa-tools'},
  ]


  constructor(private router: Router) {
    console.log("ADMIN COMPONENT: content of router --->: ", this.router.url)
    this.navBarTitle = this.sideMenu.find(item => item.url == this.router.url)?.title as string
    console.log("ADMIN COMPONENT: content of navBarTitle --->: ", this.navBarTitle)
  }
}
