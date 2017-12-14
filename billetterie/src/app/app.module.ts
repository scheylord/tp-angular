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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MenuComponent,
    MainComponent,
    TicketComponent
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
