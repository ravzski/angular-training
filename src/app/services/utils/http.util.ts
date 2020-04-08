import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from './local-storage.util';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(
    private storage: LocalStorage,
    private router: Router,
    private http: HttpClient) {

  }

  authHeader(): any {
    return {
      Authorization: `Auth: ${this.storage.get('accessToken')}`,
    };
  }

  createAuthorizationHeader(skipAuth?: boolean): any {
    let headerParams = {};

    if (!skipAuth) {
      headerParams = this.authHeader();
    }

    headerParams['Content-Type'] = 'application/json';

    return headerParams;
  }

  get(url: any, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.get(url, {
      headers
    }).pipe(
      catchError(res => {
        return this.commonErrorHandler(res);
      })
    );
  }

  post(url, data, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.post(url, data, {
      headers
    }).pipe(
      catchError(res => {
        return this.commonErrorHandler(res);
      })
    );
  }

  patch(url: any, data: any, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.patch(url, data, {
      headers
    }).pipe(
      catchError(res => {
        return this.commonErrorHandler(res);
      })
    );
  }

  delete(url: any, skipAuth?: boolean): any {
    const headers = new HttpHeaders(this.createAuthorizationHeader(skipAuth));
    return this.http.delete(url, {
      headers
    }).pipe(
      catchError(res => {
        return this.commonErrorHandler(res);
      })
    );
  }

  private commonErrorHandler(res: any) {
    const body = res.error;
    if (body.errors) {
      body.errors.forEach((err) => {
        if (res.status === 401) {
          this.storage.clear();
        } else if (res.status === 422) {
          this.displayError(err);
        }
      });
    } else {
      const err = body.error || JSON.stringify(body);
      if (res.status === 401) {
        this.displayError(err);
        this.storage.clear();
      } else {
        this.displayError(err);
      }
    }
    return throwError(res);
  }


  displayError(err) {
    console.log(err);
  }
}
