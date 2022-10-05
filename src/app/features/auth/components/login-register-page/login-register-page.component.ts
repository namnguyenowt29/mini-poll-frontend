import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.scss']
})
export class LoginRegisterPageComponent implements OnInit {
  pageTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/login') this.pageTitle = "LOG IN"
    if (this.router.url === '/register') this.pageTitle = "REGISTER"
  }

}
