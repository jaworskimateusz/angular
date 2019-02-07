import { Component, OnInit } from '@angular/core';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  studentName = 'Mateusz';
  public myId = "testid";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  public area ="";
  public count = 100;
  public name = "";
  public displayName = false;
  public color = "red";
  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.studentName;
  }

  onClick() {
    this.greeting = "First event!";
  }

  onClickEvent(event) {
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }


}
