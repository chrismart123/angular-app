import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestApiService {
  // Define API
  apiURL = "http://localhost:8083";

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // HttpClient API get() method => Fetch employees list
  // getEmployees() {
  //   const url = this.apiURL + "/employees";

  //   return this.http.post(url);
  // }
}
