import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  constructor() { }
  colors=["red","blue","green","yellow","black"];
  persons=[
    {"id":1,"name":"Ahmed"},
    {"id":2,"name":"Mohamed"},
    {"id":3,"name":"Abanoub"},
    {"id":4,"name":"Sara"}
  ]
  ngOnInit(): void {
  }

}
