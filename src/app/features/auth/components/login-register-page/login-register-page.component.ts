import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.scss']
})
export class LoginRegisterPageComponent implements OnInit {
  urlSubscription: Subscription;
  pageTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pageTitle = this.getPageTitle(this.router.url)
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const currentURL = (event as NavigationEnd).url
      this.pageTitle = this.getPageTitle(currentURL)
    });
  }

  getPageTitle(url: string) {
    if (url === '/register') return "REGISTER"
    return "LOG IN"
  }

}
