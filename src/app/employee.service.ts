import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _url:string="/assets/Data/employees.json";
  _postUrl="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

  placePost()
  {
    let post={
      userId:2,
      id:1,
      title:"This is title",
      body:"This is body"
    }

    this.http.post(this._postUrl,post).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

}
