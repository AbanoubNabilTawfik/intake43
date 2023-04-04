import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments=[
    {id:1 ,name:"Angular"},
    {id:2 ,name:"React"},
    {id:3 ,name:"Node"},
    {id:4 ,name:"JavaScript"},
    {id:5 ,name:"MongoDb"},
  ]
  selectedId:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    })
  }

  onSelect(dept:any)
  {
    //navigate to department details component and pass the id to it
    this.router.navigate(["/department",dept.id]);
  }

}
