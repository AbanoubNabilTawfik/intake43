import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  constructor() { }
  showMessage:boolean=false;
  isLoggedIn:boolean=true;
  fullName:string="Ahmed Mohamed";

  ngOnInit(): void {
  }

}
