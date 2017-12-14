import { LoginComponentComponent } from "./home/login-component/login-component.component";

export const appRouteList = [
    {
        component: LoginComponentComponent,
        path: '/'
    },
    
    {
        path: '**',
        redirectTo: '/'
    }
];
        