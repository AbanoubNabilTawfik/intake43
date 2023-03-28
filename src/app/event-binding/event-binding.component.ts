import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  message:string="";
  ngOnInit(): void {
  }

  showMsg(event:any)
  {
    console.log("Hello from type script class");
    this.message="Welcome from type script class";
    console.log(event);
  }

  alertValue(txtInput:any)
  {
   console.log(txtInput);
  }

}
