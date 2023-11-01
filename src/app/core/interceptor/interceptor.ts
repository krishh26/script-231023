import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: any = this.localStorageService.getLoggerToken();
    return next.handle(request.clone({ setHeaders: { authorization: `Bearer ${token}` } }))
  }
}
