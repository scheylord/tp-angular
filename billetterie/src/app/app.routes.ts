import { ErrorComponent } from './error/error.component';
import { AddTicketComponent } from './home/add-ticket/add-ticket.component';
import { TicketComponent } from './home/ticket/ticket.component';
import { LoginComponentComponent } from "./home/login-component/login-component.component";
import { ModifyTicketComponent } from './home/modify-ticket/modify-ticket.component';

export const appRouteList = [
    {
        component: LoginComponentComponent,
        path: 'login'
    },
    {
        component: TicketComponent,
        path: 'tickets'
    },
    {
        component: AddTicketComponent,
        path: 'tickets/add'
    },
    {
        component: ModifyTicketComponent,
        path: 'tickets/modify/:ticketId'
    },
    {
        component: ErrorComponent,
        path: 'error'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
        