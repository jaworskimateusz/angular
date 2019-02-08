import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 21},
    {"id": 3, "name": "Yuki", "age": 40},
    {"id": 4, "name": "Celina", "age": 28}
  ];

  constructor() { }

  getEmpolyees() {
    return this.employees;
  }
}
