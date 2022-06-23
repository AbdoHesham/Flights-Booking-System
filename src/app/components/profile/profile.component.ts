import { Component, OnInit,ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('app-sidebar') sidebar: SidebarComponent| undefined;;

  constructor() { }

  ngOnInit(): void {
  }
//   public onCreated(args: any) {
//     this.sidebar.element.style.visibility = '';
// }
}
