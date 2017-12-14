import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `<app-menu></app-menu>
  <app-main></app-main>`,
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
