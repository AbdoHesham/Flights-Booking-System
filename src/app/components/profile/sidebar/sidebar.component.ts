import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  element: any;
  active = 'top';
  username:any;
links:any[]=[]
@ViewChild('wrapper') wrapper:ElementRef | any 
userEmail: any = JSON.parse(localStorage.getItem('userdata') || '');

  constructor() {
    this.links=[
    // {routerLink:"personalinfo",class:"list-group-item list-group-item-action bg-light",Name:"Personalinfo"},
    {routerLink:"orders",class:"list-group-item list-group-item-action bg-light",Name:"Flights"},
    // {routerLink:"addresses",class:"list-group-item list-group-item-action bg-light",Name:"Addresses"},
    // {routerLink:"cliams",class:"list-group-item list-group-item-action bg-light",Name:"Cliams"},
    // {routerLink:"orders",class:"list-group-item list-group-item-action bg-light",Name:"Orders"},


  ]
  this.userEmail = this.userEmail.email;

// this.username=JSON.parse( localStorage.getItem('userId' )).Name;
}

  ngOnInit(): void {


  }

   channelChanged(e:any) {
    e.preventDefault();
    this.wrapper.classList.toggle("toggled");
}

}
