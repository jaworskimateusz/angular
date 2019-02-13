import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';            for error handling
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmpolyees() {
    return this.http.get<IEmployee[]>(this._url);
  }

  /* error handling
  getEmpolyees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  */
}