import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum AuthEndPoint {
  LOGIN = 'login',
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  // Function to use for he login user functionality
  loginUser(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.LOGIN, payload);
  }

}
