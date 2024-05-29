import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";

  @Input() menu: MenuItem[] = [];
iconClass: string = '';
  /**
   *  Mon Compte
      Demander un prêt
      Suivi de mes prêts
      Rembourser un prêt
      Messagerie
      Parametre
   */
  constructor() {
    if(!this.menu.length){
      this.menu = [
        {title: 'Mon Compte', url: '/client/dashboard', icon: 'fas fa-circle-user'},
        {title: 'Demander un prêt', url: '/client/apply-loan', icon: 'fas fa-regular fa-money-bills'},
        {title: 'Suivi de mes prêts', url: '/client/view-loan', icon: 'fas fa-sack-dollar'},
        {title: 'Rembourser un prêt', url: '/client/pay-loan', icon: 'fas fa-hand-holding-dollar'},
        {title: 'Messagerie', url: '/client/messaging', icon: 'fas fa-envelope'},
        {title: 'Parametre', url: '/client/settings', icon: 'fas fa-tools'},
      ]
    }
  }

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}

interface MenuItem {
  title: string;
  icon: string;
  url: string;
}
