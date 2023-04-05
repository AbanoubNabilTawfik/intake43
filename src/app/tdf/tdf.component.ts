import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics=["Angular","React","JavaScript"];
  userModel=new User("","","","",false);
  constructor(private enrollService:EnrollService) { }

  ngOnInit(): void {
  }

  submitData()
  {
    //component ===> service
    //service==>http call
    this.enrollService.enroll(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }

}
