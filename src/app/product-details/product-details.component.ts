import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
//the purpose of this object is to recieve the data sent by parent component i.e product component
  @Input() prodObj:Product;


  //sending data from child to parent
  //creating a custom event
  @Output() myEvent=new EventEmitter();

  sendProductToParent(prodTitle){
    //emit data to parent
    this.myEvent.emit(prodTitle);
  }
}
