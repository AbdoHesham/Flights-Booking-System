import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit,AfterViewChecked,DoCheck {
  totalLenght = 0;
  flights: any[] = [];
  userEmail: any = JSON.parse(localStorage.getItem('userdata') || '');

  constructor() {
    this.userEmail = this.userEmail.email;
    this.flights = JSON.parse(localStorage.getItem('bookingList') || '');
  }
  ngOnInit(): void {}
  ngAfterViewChecked() {

  
  }

  ngDoCheck() {
    this.flights = this.flights.filter((f) => {
      if(f.bookingDetails.email == this.userEmail){
        return this.flights;
      }
      else{
        console.log(' email not matched ');
        return ;
      }
      // f.bookingDetails.email == this.userEmail
      //   ? console.log(' email matched ')
      //   : console.log(' email not matched ');
      //   console.log(this.flights);
  
      // console.log( this.flights);
     
    });
  }

}
