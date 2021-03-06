import { StorageService } from './../../shared/providers/storage/storage.service';
import { UserConnexion } from './../../model/user-connexion';
import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../model/user'
import {APIHelper} from '../../shared/providers/api-helper/api-helper.service'
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  template: `
<div>
  <form #loginForm="ngForm" (submit)="onSubmit()">
    <input type="text" [(ngModel)]="userConnexion.login" name="login" placeholder="login" />
    <input type="password" [(ngModel)]="userConnexion.password" name="password" placeholder="password" />
    <input type="submit" value="Connexion"/>
  </form>
</div>
`,
  styles: [``]
})
export class LoginComponentComponent implements OnInit {

  userConnexion : UserConnexion;
  constructor(private _apiHelper : APIHelper, private _userService: UserService, private _router: Router, private _storageService : StorageService) {}

  ngOnInit() {
    this.userConnexion = new UserConnexion();
  }

  onSubmit() {
    //TODO : appel serveur pour vérifier si ok
    console.log("ok");
    this._apiHelper.requestApi({
      'action' : '/login',
      'method' : 'post',
      'datas' : {'pseudo' : this.userConnexion.login, 'password' : this.userConnexion.password}
    }).then( data => {
      if(data === false) {
        console.log("ERREUR CONNEXION");
      } else {
        console.log(data);
        console.log(data.messages);
        let a = {key: "token", value:data.token};
        this._storageService.set(a);
        this._router.navigate(['/tickets']);
      }
    });
    
  }

}

