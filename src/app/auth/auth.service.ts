import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _loginURL = "http://localhost:4200/api/login";

  constructor(private http: HttpClient) {}

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  loginUser(user) {
    return this.http.post<any>(this._loginURL, user).subscribe(
      res => console.log("RES", res),
      err => console.log("err", err)
    );
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
