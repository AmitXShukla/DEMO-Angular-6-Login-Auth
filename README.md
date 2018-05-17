<h2>Why another new Login system code ?</h2>
Because, I couldn't find one which supports multiple databases and I can re-use to support an Offline, Mobile and Progressive Web Apps at the same time.<br>
<h4>Not until now</h4>
<h4>Angular 6.0 - One framework. Mobile & desktop</h4>

<h2>Objective:</h2>
My objective is to build one code base for a complete Login system usable across different devices, databases and platforms (at least most of it with minimum configuration changes).
<h4>Tools/Platforms</h4>
iOS, Android, Windows, Progressive Web Apps, Offline Desktop Apps for Mac, Linux and Windows<br>
MYSQL, PostGreSQl, MariaDB, MS SQL, Oracle<br>
Couch DB, Couchbase, Cloudant, Mondgo DB and FIREBASE<br>

<h2>coming soon.. :</h2>
I will share my work to implement as SCHEMATICS, download from NPM or GitHUB Repo.<br>

<h2>Rules First:</h2>
------------------------------------------------------
<b>Rule #1</b> - Always use local css and SVG Icons<br>
<b>Rule #2</b> - All backend code (CRUD operations must be in Services)<br>
<b>Rule #3</b> - Prepare for i18n (Multilingual)<br>
<b>Rule #4</b> - Avoid DB specific operations<br>
(else prepare for exceptions, like if FIREBASE is used for social auth, always give users a DB login system as alternate)<br>
<b>Rule #5</b> - No Hardcoded values and Local Storage variables<br>
<b>Rule #6</b> - Secure your database/datastorage with proper rules/authentications<br>
<b>Rule #7</b> - know your CORS<br>
<b>Rule #8</b> - Generalize your code<br>
<b>Rule #9</b> - No function is written more than 5 lines.<br>
<b>Rule #10</b> - GitHub is your only friend.<br>

<h2>Let's Begin:</h2>
<h4>Check versions:</h4>
$ node -v<br>
$ npm -v<br>
$ ng -v
<h4>Create a new app </h4>
$ ng new myapp

<h4>Get Routing and Material: </h4>
$ ng g module shared/modules/AppRoutingModule<br>
$ ng g module shared/modules/ElishCustomMaterialModule<br>
// make sure these two modules are imported in app.module.ts<br>
Let's copy these file content from my github repo<br>
Copy assets/icons & assets/img<br>

<h4>Create project skelton: </h4>

$ ng g component aboutus // a filler component<br>
$ ng g component shared/header // a sticky header component<br>
$ ng g component shared/footer // a sticky footer component<br>
Let's copy these file content from my github repo<br><br>
<h4>Install AngularFire2 and firebase</h4>
$ npm install firebase angularfire2 --save<br>
Import and initialize firebase settings in your app.module<br>
import { AngularFireModule } from 'angularfire2';<br>
import { AngularFirestoreModule } from 'angularfire2/firestore';<br>
import { AngularFireStorageModule } from 'angularfire2/storage';<br>
import { AngularFireAuthModule } from 'angularfire2/auth';<br>
import { firebase } from '@firebase/app';<br>
import { environment } from '.././environments/environment';<br><br>
AngularFireModule.initializeApp(environment.firebase, 'atrackin'), // imports firebase/app needed for everything<br>
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features<br>
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features<br>
    AngularFireStorageModule<br>
<h4>Let's create few more components and services:</h4>
$ ng g component settings // component where page lands after login is verified and can logout<br>
$ ng g service services/auth-guard // used in router guard<br>
$ ng g service services/back-end // used for all backend database services<br>
<h4>Let's create login & signup components:</h4>
$ ng g component shared/login<br>
$ ng g component shared/signup<br>

<h4>copy over content</h4>
environment.ts, environment.prod.ts // update these files are per repo<br>
backend and auth-guard // update these files are per repo<br>
login and signup files // update these files are per repo<br>
<h4>firebase settings</h4>
Please copy over environment settings and update environment.ts file<br>
Please enable google, facebook and email login as sign-in methods to your firebase project.<br>

<h4>ng serve</h4>
<h4>You have a complete login app now.</h4>

<h2>coming soon.. :</h2>
Very soon, instead of copying over contents from GitHub Repo -
I will instead create SCHEMATICS. Stay Tuned and subscribe to my Blogs & Videos.