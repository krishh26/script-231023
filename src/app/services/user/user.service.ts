import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum UserEndPoint {
  GET_USER = "users",
  ADD_EDIT_USER = "​AddEditUser"
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  // Function to use for the add and edit user details
  addEditUser(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + UserEndPoint.ADD_EDIT_USER, payload);
  }

  // Function to use for the gett user details
  getUser(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + UserEndPoint.GET_USER);
  }
}
