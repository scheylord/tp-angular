import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../service/ticket.service';
import { Ticket } from '../../model/ticket';

@Component({
  selector: 'app-modify-ticket',
  templateUrl: './modify-ticket.component.html',
  styleUrls: ['./modify-ticket.component.css']
})
export class ModifyTicketComponent implements OnInit {

  ticketId: number;
  ticketIndex: number;
  @Input() ticket: Ticket;

  constructor(private _router: Router, private _route: ActivatedRoute, private _ticketsService : TicketService) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.ticketId = +params['ticketId'];
    });
   //on cherche le ticket correspondant
    this.ticketIndex = this._ticketsService.tickets.findIndex(t => t.id === this.ticketId);
    this.ticket = this._ticketsService.tickets[this.ticketIndex];
    //TODO : gestion d'erreur
  }

  onSubmit() {
    this._ticketsService.tickets[this.ticketIndex] = this.ticket;
    this._router.navigate(['/tickets']);
  }

}
