import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  // TO-DO: get all these values from auth service
  currentUser = {
    name: "Suong Nguyen",
    email: "suongnguyen@gmail.com",
    avatar: "https://mangtannha.com/wp-content/uploads/2022/09/anh-meo-che-sieu-bua-khien-cong-dong-mang-cuoi-bo-3.jpg"
  }
  // ----------------------------------------------


  constructor() { }

  ngOnInit(): void {
  }

}
