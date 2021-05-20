import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColorsDataService {
//it contains colors dataservice and users data service
  constructor(private hc:HttpClient) { }

  getColors():Observable<any>{
    return this.hc.get<any>("https://reqres.in/api/unknown");
  }

  //users dataservice
  getUsers():Observable<any>{
    return this.hc.get<any>("https://jsonplaceholder.typicode.com/users");
  }
}
