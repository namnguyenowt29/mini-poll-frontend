import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isLoading = false;
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  // TO-DO: calling api
  onSubmit() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 1000)
    console.log(this.loginForm);
  }

}
