import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
Fname="Abdelrahman"
Lname="Hesham"
FullName=`${this.Fname}  ${this.Lname}`
  constructor() { }

  ngOnInit(): void {
  }

}
