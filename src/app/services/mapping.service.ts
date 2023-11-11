import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum UserMappingEndPoint {
  USER_GAME_MAPPING = "UserGameMapping",
  USER_SCRIPT_MAPPING = "​UserScriptMapping",
  GET_USER_SCRIPT_MAPPING = "GetUserScriptMapping"
}


@Injectable({
  providedIn: 'root'
})
export class MappingService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  // user script mapping
  getuserScriptMapping(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + UserMappingEndPoint.GET_USER_SCRIPT_MAPPING, payload);
  }

  // user GAME mapping
  userGameMappint(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + UserMappingEndPoint.USER_GAME_MAPPING, payload);
  }

}
