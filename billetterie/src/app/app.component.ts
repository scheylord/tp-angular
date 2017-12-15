import { StorageService } from './shared/providers/storage/storage.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Billetterie';
  constructor(private _router: Router, private _storageService : StorageService) {}
  
    ngOnInit() {
      //if token, aller sur la page des tickets
      //TODO
      let a = {key : "token"};
      let token : string;
      this._storageService.get(a).then(data => {
        this._router.navigate(['/tickets']);
      });
      //si pas de token, aller sur la page de connexion;
      this._router.navigate(['/login']);
    }
}
