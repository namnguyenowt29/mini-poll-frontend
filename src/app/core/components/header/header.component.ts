import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //TO-DO: get this value from auth service
  public isLoggedIn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
