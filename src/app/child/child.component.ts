import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `Value from ts file : {{name}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name : string = "This value is being displayed from ts file child component";
  constructor() { }

  ngOnInit() {
  }

}
