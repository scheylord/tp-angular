import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../model/ticket';


@Component({
  selector: 'app-one-ticket',
  templateUrl: './one-ticket.component.html',
  styleUrls: ['./one-ticket.component.css']
})
export class OneTicketComponent implements OnInit {

  @Input() ticket : Ticket;

  constructor() { }

  ngOnInit() {
  }

}
