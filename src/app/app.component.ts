import { Component, OnInit } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private i18n: NzI18nService) {}

  // TODO: Implement i18n later
  ngOnInit(): void {
    this.i18n.setLocale(en_US);
  }
}
