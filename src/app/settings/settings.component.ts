import { Component, OnInit } from '@angular/core';
import { BackendService} from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _backendService: BackendService, private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    this._backendService.logout()
     .then(
       (success) => {
       this._router.navigate(['/login']);
     }).catch(function (error) {
         console.log(error);
       })
  } 
}
