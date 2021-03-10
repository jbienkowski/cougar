import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tabSelected(s: any) {
    $('#menuTabs')
      .find('li')
      .removeClass('is-active');
    $(s).addClass('is-active');
  }

  public detachEidaToken() {
    return;
  }

}
