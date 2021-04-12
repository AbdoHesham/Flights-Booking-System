import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { flight } from 'src/shared/models/flight';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';
import { HomeService } from '../../../shared/services/home/home.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  active = 1;
  data: any;
  param: any;
  param2:any;
  flights: any[] = [];
  refillFlights: any[] = [];
  filterdArray: any;
  model: NgbDateStruct | undefined;
  filterInputs = [
    { key: 'to', value: '' },
    { key: 'from', value: '' },
    { key: 'Departing', value: '' },
  ];
  param3: any;

  // currentLang: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    public HomeService: HomeService,
    private fg: FormBuilder,
    public ftr: FooterService,
    public nav: NavService
  ) {}
  public searchForm = this.fg.group({
    leaving_Place: ['', [Validators.required]],
    going_Place: ['', [Validators.required]],
    departing_date: ['', [Validators.required]],
  });

  ngOnInit() {
    this.refillFlights = this.getDataFromService();
    console.table(this.flights);
    this.nav.show();
    this.ftr.show();
  }

  getDataFromService() {
    this.flights = this.HomeService.getFlights;
    return this.flights;
  }

  OnSearch() {

    this.refillFlights = this.flights;
    this.param = this.searchForm.controls.going_Place.value;
    this.param2 = this.searchForm.controls.leaving_Place.value;
    this.param3 = this.searchForm.controls.departing_date.value;

    this.filterInputs[0].value = this.param;
    this.filterInputs[1].value = this.param2;
    this.filterInputs[2].value = this.param3;

    this.filterInputs.map((obj) => {
      if (obj.value)  this.filterWord(this.param,obj.key);
      console.log(this.param,this.param2,this.param3 ,obj.key)

    });

    this.router.navigateByUrl('search')
  }

  filterWord(searchKey: string, props: string) {
    this.refillFlights = this.refillFlights.filter(
      (fight) => fight[props] == searchKey
    );
    localStorage.setItem('refillFlights',JSON.stringify(this.refillFlights))
    console.log(this.refillFlights);
  }




}
