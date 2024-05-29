import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'app/models/menu.interface';
import { AuthService } from 'app/services/auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  @Input() menu: MenuItem[] = [];
iconClass: string = '';



  // -------------------------------------- CONSTRUCTOR -------------------------------------------
  constructor(private authService: AuthService) {
    console.log("content of menu: ", this.menu)
    if(!this.menu.length){ // DEFAULT VALUE OF LEFT MENU FOR TESTING PURPOSES
      this.menu = [
        {title: 'Mon Compte', url: '/client/dashboard', icon: 'fa-circle-user'},
        {title: 'Demander un prêt', url: '/client/apply-loan', icon: 'fa-hand-holding-dollar'},
        {title: 'Suivi de mes prêts', url: '/client/view-loan', icon: 'fa-sack-dollar'},
        {title: 'Rembourser un prêt', url: '/client/pay-loan', icon: 'fa-money-bills'},
        {title: 'Messagerie', url: '/client/messaging', icon: 'fa-envelope'},
        {title: 'Paramètre', url: '/client/settings', icon: 'fa-tools'},
      ]
    }
  }

  // -------------------------------------- NG ON INIT -------------------------------------------
  ngOnInit() {}




  // -------------------------------------- TOGGLE COLLAPSE -------------------------------------------
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }





  // -------------------------------------- LOGOUT METHOD -------------------------------------------
  logout(){
    console.log("logging out")
    this.authService.logout();
  }
}

