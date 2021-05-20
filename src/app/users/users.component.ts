import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorsDataService } from '../colors-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  constructor(private coDs:ColorsDataService) { }
userSubObj:Subscription;
usersInfo:any;
  ngOnInit(): void {
    this.userSubObj=this.coDs.getUsers().subscribe(
      userData=>{
        this.usersInfo=userData;
      },
      err=>{
        console.log("err in userData",err);
      }
    );

  }
  ngOnDestroy() {
    this.userSubObj.unsubscribe();
  }

}
