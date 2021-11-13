import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators"
import { SpinnerService } from "./spinner.service";

@Injectable()
export class spinnerHttpInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.startSpinner(); //Start showing spinner
        return next.handle(request).pipe(finalize(() => {
            this.stopSpinner(); //Stop spinner once the request is complete
        }));
    }

    //show spinner
    startSpinner() {
        this.spinnerService.spinnerSubject.next(true)
    }

    //hide spinner
    stopSpinner() {
        this.spinnerService.spinnerSubject.next(false)
    }
}