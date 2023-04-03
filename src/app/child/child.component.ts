import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //@Input() parentData:any;
  @Input('parentData') message:any;

  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendData()
  {
    //fire event to hold data
    this.childEvent.emit("Hello parent from child");
  }

  logData()
  {
    console.log("Hello im child")
  }

}
