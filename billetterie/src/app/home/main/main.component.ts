import { Ticket } from './../../model/ticket';
import { TicketService } from './../../service/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tickets: Ticket[];

  constructor(private _ticketsService : TicketService ) {}

  ngOnInit() {
    this.tickets = this._ticketsService.tickets;
  }

}
