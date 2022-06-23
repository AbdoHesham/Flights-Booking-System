import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clients: any[]=[];
  clientsInfo: any;
  clear : any;
  check: any;

  constructor(public ftr : FooterService,
    public nav: NavService,
    private router: Router,
    ) {    
    }

  ngOnInit(): void {
    

   this. getDataFromLocalStorage()

  }




  getDataFromLocalStorage(){
    this.clients = JSON.parse(localStorage.getItem('bookingList')|| '[]');

  }


}
