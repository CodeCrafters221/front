import { Component } from '@angular/core';
import { MenuItem } from 'app/models/menu.interface';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

  sideMenu: MenuItem[] = [
    {title: 'Tableau de Bord', url: '/agent/dashboard', icon: 'fa-chart-line'},
    {title: 'Mon Compte', url: '/agent/account', icon: 'fa-circle-user'},
    {title: 'Suivi des prêts', url: '/agent/view-loan', icon: 'fa-hands-holding-circle'},
    {title: 'transfert de fonds', url: '/agent/pay-loan', icon: 'fa-money-bill-transfer'},
    {title: 'Messagerie', url: '/agent/messaging', icon: 'fa-envelope'},
    {title: 'Paramètre', url: '/agent/settings', icon: 'fa-tools'},
  ]
}
