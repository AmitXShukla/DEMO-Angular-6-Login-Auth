import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
import { firebase } from '@firebase/app';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient, public afAuth: AngularFireAuth) { }

  getConfig() {
    return environment.social;
  }

  // function to send emails using a PHP API
  sendEmail(messageData) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/X-www-form-urlencoded' })
    };
    return this._http.post(environment.emailAPI, messageData, httpOptions);
  }

  // sign-up page - create a new user
  createUser(formData){
    if(environment.database == 'firebase') {
      return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }
    if(environment.database == 'SQL') {
      // need to call SQL API here if a SQL Database is used
    }
  }

  // login page - login with FB/GOOGLE/EMAIL, if formData is passed, this means is user is using email/password login
  login(loginType,formData?) {
    if(formData) {
      return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
    } else {
      let loginMethod;
      if(loginType == 'FB') { loginMethod = new firebase.auth.FacebookAuthProvider(); }
      if(loginType == 'GOOGLE')  { loginMethod = new firebase.auth.GoogleAuthProvider()}

      return this.afAuth.auth.signInWithRedirect(loginMethod)
    }
  }

  logout(){
    window.localStorage.removeItem("displayName");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("picture");
    return this.afAuth.auth.signOut();
  }

    // method to retreive firebase auth after login redirect
  redirectLogin(){
    return this.afAuth.auth.getRedirectResult();
  }
}