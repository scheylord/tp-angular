import { appRouteList } from './app.routes';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './home/login-component/login-component.component';
import {APIHelper} from './shared/providers/api-helper/api-helper.service'
import { HttpModule } from '@angular/http';
import {StorageService} from './shared/providers/storage/storage.service';
import { MenuComponent } from './home/menu/menu.component';
import { MainComponent } from './home/main/main.component'
import { UserService } from './service/user.service';
import { TicketService } from './service/ticket.service';
import { TicketComponent } from './home/ticket/ticket.component';
import { OneTicketComponent } from './home/one-ticket/one-ticket.component';
import { AddTicketComponent } from './home/add-ticket/add-ticket.component';
import { ModifyTicketComponent } from './home/modify-ticket/modify-ticket.component';
import { ErrorComponent } from './error/error.component';
import { TicketCompteurComponent } from './home/modify-ticket/ticket-compteur/ticket-compteur.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MenuComponent,
    MainComponent,
    TicketComponent,
    OneTicketComponent,
    AddTicketComponent,
    ModifyTicketComponent,
    ErrorComponent,
    TicketCompteurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouteList) //register routes
  ],
  providers: [
    APIHelper,
    StorageService,
    UserService,
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
