import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clients: any[]=[];
  clientsInfo: any;

  constructor(    private router: Router,
    private toaster : ToastrService
    ) { }

  ngOnInit(): void {
   this. getDataFromLocalStorage()
  }


  getDataFromLocalStorage(){
    this.clients = JSON.parse(localStorage.getItem('bookingList')|| '[]');

  }


}
