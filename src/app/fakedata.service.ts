import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Posts} from '../app/models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {
  //inject HttpClient object
  
   constructor(private hc:HttpClient) {}
   
   getPosts():Observable<Posts[]>{
      return this.hc.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getUsers():Observable<any>{
      return this.hc.get<any>("https://reqres.in/api/users?page=2");
    }
}
