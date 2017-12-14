import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Billetterie';
  constructor(private _router: Router) {}
  
    ngOnInit() {
      //if token, aller sur la page des tickets
      //TODO
  
      //si pas de token, aller sur la page de connexion;
      this._router.navigate(['/login']);
    }
}
