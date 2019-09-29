import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `Value from ts file : {{name}}<br>
            This value from Parent : {{childInputProperty}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name : string = "This value is being displayed from ts file child component";
  @Input() childInputProperty ;
  constructor() { }

  ngOnInit() {
  }

}
