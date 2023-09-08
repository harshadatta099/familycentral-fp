import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   // Inject Router service
   constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });
  }

  // Variable to track if it's a landing route
  isLandingRoute: boolean = false;

  // Function to check if the current route is 'landing'
  private checkRoute(): void {
    const currentRoute = this.router.url.split('/').pop();
    this.isLandingRoute = currentRoute === 'landing';
  }
}
