import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMessage;

  constructor(private _employeeSerice: EmployeeService) { }

  ngOnInit() {
    this._employeeSerice.getEmpolyees()
      .subscribe(data => this.employees = data,
                  error => this.errorMessage = error);
  }

}
