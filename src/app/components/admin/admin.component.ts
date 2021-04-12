import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clients: any;
  clientsInfo: any;

  constructor() { }

  ngOnInit(): void {
   this. getDataFromLocalStorage()
  }


  getDataFromLocalStorage(){
    this.clients = JSON.parse(localStorage.getItem('bookingList') || '{}');

  }

}
