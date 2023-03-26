import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  textColor:string="red";
  hasError:boolean=true;
  
  messageStyles={
    color:"gray",
    fontStyle:"italic",
    backgroundColor:"black"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
