import { Component, OnInit } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';
import { ApiService } from './api.service';
import { PostType } from './dummy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$ = false;
  dataFromApi: any;
  constructor(private i18n: NzI18nService, private apiClient: ApiService) {}

  // TODO: Implement i18n later
  ngOnInit(): void {
    this.i18n.setLocale(en_US);
    this.fetchText();
  }

  fetchText() {
    this.apiClient
      .getApiResponse<PostType>(this.apiClient.fetchResource())
      .subscribe((data) => {
        console.log(data);
        this.isLoading$ = data.isLoading;
        this.dataFromApi = JSON.stringify(data.responseData);
      });
  }
}
