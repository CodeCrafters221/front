import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'app/models/menu.interface';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
})
export class AgentComponent {
  navBarTitle!:string
  sideMenu: MenuItem[] = [
    {title: 'Tableau de Bord', url: '/agent/dashboard', icon: 'fa-chart-line'},
    {title: 'Mon Compte', url: '/agent/account', icon: 'fa-circle-user'},
    {title: 'Suivi des prêts', url: '/agent/view-loans', icon: 'fa-hands-holding-circle'},
    {title: 'transfert de fonds', url: '/agent/pay-loan', icon: 'fa-money-bill-transfer'},
    {title: 'Messagerie', url: '/agent/messaging', icon: 'fa-envelope'},
    {title: 'Paramètre', url: '/agent/settings', icon: 'fa-tools'},
  ]

  constructor(private router: Router) {
    console.log("ADMIN COMPONENT: content of router --->: ", this.router.url)
    this.navBarTitle = this.sideMenu.find(item => item.url == this.router.url)?.title as string
    console.log("ADMIN COMPONENT: content of navBarTitle --->: ", this.navBarTitle)
  }
}
