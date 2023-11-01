import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum GameEndpoint {
  ADD_EDIT_CONFIG = "​AddEditGameConfiguration",
  GET_CONGIF = "GetGameConfiguration"
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  // Function to use for the add and edit game congfigration 
  addEditGameConfig(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + GameEndpoint.ADD_EDIT_CONFIG, payload);
  }

  // Function to use for the get game configration
  getGameConfig(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + GameEndpoint.GET_CONGIF);
  }
}
