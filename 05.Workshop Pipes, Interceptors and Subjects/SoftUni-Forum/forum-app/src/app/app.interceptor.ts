import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "../environments/environments.developments";
import { ErrorService } from "./core/error/error.service";

const { appUrl } = environment

@Injectable()

export class appInteceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private errorService: ErrorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', appUrl),
                withCredentials: true //когато се логнеш ще запише токена в кукито;
            })
        }
        return next.handle(req).pipe(
            catchError((error) => {

                if (error.status === 401) {
                    this.router.navigateByUrl('/auth/login');
                } else {
                    this.errorService.setError(error); //сетваме еррор за да можем да го получим в компонентата
                    this.router.navigateByUrl('/error');
                }

                return [error];
            })
        )
    }
}

export const appInteceptorProvider: Provider = { // това го добавяме в app.module.ts в providers
    multi: true,
    useClass: appInteceptor,
    provide: HTTP_INTERCEPTORS,
}