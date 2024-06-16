import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'app/models/menu.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  navBarTitle!: string;

  sideMenu: MenuItem[] = [
    {title: 'Tableau de Bord', url: '/admin/dashboard', icon: 'fa-chart-line'},
    {title: 'PARAMÈTRES DE L’IA', url: '/admin/ai-assistant-configs', icon: 'fa-robot'},
    {title: 'Mon Compte', url: '/admin/account', icon: 'fa-circle-user'},
    {title: 'Rapports d\'usage', url: '/admin/reports', icon: 'fa-file-pdf'},
    {title: 'Messagerie', url: '/admin/messaging', icon: 'fa-envelope'},
    {title: 'Paramètre', url: '/admin/settings', icon: 'fa-tools'},
  ]

  constructor(private router: Router) {
    console.log("ADMIN COMPONENT: content of router --->: ", this.router.url)
    this.navBarTitle = this.sideMenu.find(item => item.url == this.router.url)?.title as string
    console.log("ADMIN COMPONENT: content of navBarTitle --->: ", this.navBarTitle)
  }
}
