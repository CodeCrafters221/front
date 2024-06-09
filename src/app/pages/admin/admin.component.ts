import { Component } from '@angular/core';
import { MenuItem } from 'app/models/menu.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {



  sideMenu: MenuItem[] = [
    {title: 'Tableau de Bord', url: '/admin/dashboard', icon: 'fa-chart-line'},
    {title: 'PARAMÈTRES DE L’IA', url: '/admin/ai-assistant-configs', icon: 'fa-robot'},
    {title: 'Mon Compte', url: '/admin/account', icon: 'fa-circle-user'},
    {title: 'Rapports d\'usage', url: '/admin/reports', icon: 'fa-file-pdf'},
    {title: 'Messagerie', url: '/admin/messaging', icon: 'fa-envelope'},
    {title: 'Paramètre', url: '/admin/settings', icon: 'fa-tools'},
  ]
}
