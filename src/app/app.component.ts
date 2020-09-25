import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthentificationService} from './Services/authentification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navigationSubscription
  showMenu:boolean = true;
  title = 'CvAnalyserFront1';
  role:string;
  prenom:string;
  constructor(public router: Router,private authService: AuthentificationService) {

    // subscribe to the router events. Store the subscription so we can
    // unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  ngOnInit() {
   }
  Logout() {
    localStorage.removeItem('userToken')
    this.router.navigate(['/login'])
  }


}
