import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorsDataService } from '../colors-data.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit,OnDestroy {

  constructor(private colDs:ColorsDataService) { }
  colorsInfo:any;
  colorSubObj:Subscription;
  ngOnInit(): void {
    this.colorSubObj=this.colDs.getColors().subscribe(
      colorData=>{
        this.colorsInfo=colorData;
      },
      err=>{
        console.log("err in colors data",err);
      }
    );
  }

ngOnDestroy(){
  this.colorSubObj.unsubscribe();
}

}
