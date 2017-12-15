import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../service/ticket.service';
import { Ticket } from '../../model/ticket';

@Component({
  selector: 'app-modify-ticket',
  templateUrl: './modify-ticket.component.html',
  styleUrls: ['./modify-ticket.component.css']
})
export class ModifyTicketComponent implements OnInit {

  ticketId: number;
  @Input() ticket: Ticket;

  constructor(private _route: ActivatedRoute, private _ticketsService : TicketService) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.ticketId = +params['ticketId'];
    });
   //on cherche le ticket correspondant
    this.ticket = this._ticketsService.tickets.find(t => t.id === this.ticketId);
    //TODO : gestion d'erreur
  }

  onSubmit() {
    console.log(this.ticket);
  }

}
