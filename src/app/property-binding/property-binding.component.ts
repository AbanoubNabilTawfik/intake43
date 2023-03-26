import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  textId:string="myId2";
  isDisabled:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
