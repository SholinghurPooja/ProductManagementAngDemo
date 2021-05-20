import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Posts } from '../models/posts.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {
//to get the data we must inject fakedata service object 
  constructor(private fsObj:FakedataService) { }
  myPosts:Posts[]=[];
  /*ngOnInit(): void {
    this.fsObj.getPosts().subscribe(
      postData=>{
        this.myPosts=postData;
        //console.log(this.myPosts);
      },
      err=>{console.log("err in getting posts data",err);}
    );
  }
*/
  users;
  subscriptionObj:Subscription;
  ngOnInit():void{
    this.subscriptionObj=this.fsObj.getUsers().subscribe(
      userData=>{
      this.users=userData;
      },
      err=>{
        console.log("err in getting users data",err);
      }
    )
  }
  ngOnDestroy(){
    this.subscriptionObj.unsubscribe();
  }


}
