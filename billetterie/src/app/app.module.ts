import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './home/login-component/login-component.component';
import {APIHelper} from './shared/providers/api-helper/api-helper.service'
import { HttpModule } from '@angular/http';
import {StorageService} from './shared/providers/storage/storage.service';
import { PageComponent } from './home/page/page.component';
import { MenuComponent } from './home/menu/menu.component';
import { MainComponent } from './home/main/main.component'
import { UserService } from './service/user.service';
import { TicketService } from './service/ticket.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PageComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [APIHelper, StorageService, UserService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
