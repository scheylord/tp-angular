import { TicketComponent } from './home/ticket/ticket.component';
import { LoginComponentComponent } from "./home/login-component/login-component.component";

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
        path: '**',
        redirectTo: '/'
    }
];
        