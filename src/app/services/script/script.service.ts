import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum ScriptEndPoint {
  GET_SCRIPT = "Scripts",
  USER_SCRIPT_MAPPING = "​UserScriptMapping",
  SCRIPT_ADD_EDIT = "ScriptAddEdit"
}

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }


  // get script details
  getScriptData(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + ScriptEndPoint.GET_SCRIPT);
  }

  // user script mapping
  userScriptMappint(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + ScriptEndPoint.USER_SCRIPT_MAPPING, payload);
  }

  // add edit script Details
  addEditScript(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + ScriptEndPoint.SCRIPT_ADD_EDIT, payload);
  }

}
