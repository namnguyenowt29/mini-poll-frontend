import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, startWith, of } from 'rxjs';
import { ApiResponse, PostType } from 'app/core/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchResource() {
    return this.http.get<PostType>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }

  getApiResponse<T>(
    apiCall: Observable<T>,
    initialValue = null
  ): Observable<ApiResponse<T>> {
    return apiCall.pipe(
      map((responseData) => {
        return {
          isLoading: false,
          responseData,
          error: null,
        };
      }),
      startWith({
        isLoading: true,
        responseData: initialValue,
        error: null,
      }),
      catchError((error) =>
        of({ isLoading: false, responseData: null, error: error })
      )
    );
  }
}
