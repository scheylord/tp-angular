import { Ticket } from './../model/ticket';
import { Injectable } from '@angular/core';
import {ticketMocks} from '../shared/mocks/tickets.mock.js'

@Injectable()
export class TicketService {

  private _tickets: Ticket[];

  constructor() {
    this._tickets = ticketMocks;
  }

  get tickets() {
    return this._tickets;
  }
  set tickets(tickets) {
    this._tickets = tickets;
  }
}
