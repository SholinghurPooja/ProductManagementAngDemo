import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //injecting HttpClient service object
  constructor(private hc:HttpClient) { }

  /*private living:Product[]=[
    {
      prodTitle:"Amelia 2 Seater Sofa in Charcoal Grey Colour",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/a/m/568x284/amelia-2-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-2-seater-sofa-in-charcoal-grey-colo-mc0vev.jpg",
      prodBrand:"Brand: CasaCraft",
      prodMaterial:"Primary Material: Fabric",
      prodPrice:28999
    },
    {
      prodTitle:"Sam 1 Seater Sofa in Multi Colour",
      prodImg:"https://rukminim1.flixcart.com/image/416/416/k6mibgw0/sofa-sectional/n/m/n/multi-cotton-tfctroyachm-trevi-multi-original-imafpfgzsgfznc3s.jpeg?q=70",
      prodBrand:"Brand: Trevi Furniture " ,
      prodMaterial:"Primary Material: Fabric",
      prodPrice:13899 
      
    },
    {
      prodTitle:"Monet Solid Wood Coffee Table In Dual Tone Finish",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/monet-solid-wood-coffee-table-in-dual-tone-finish-by-woodsworth-monet-solid-wood-coffee-table-in-dua-art1zn.jpg",
      prodBrand:"Brand: Woodsworth",
      prodMaterial:"Primary Material: Sheesham Wood",
      prodPrice:23999
    },
    {
      prodTitle:"Marcus Coffee Table with Marble Top in White & Matte Gold Finish",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/a/568x625/marcus-coffee-table-with-marble-top-in-white---matte-gold-finish-by-bohemiana-marcus-coffee-table-wi-kayvfc.jpg",
      prodBrand:"Brand: Bohemiana",
      prodMaterial:"Top Material: Marble",
      prodPrice:14999
    },
    
   
    
    {
      prodTitle:"Butros Rocking Chair in Teak Gold Finish",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/b/u/568x625/butros-rocking-chair-in-teak-gold-finish-by-dzyn-furnitures-butros-rocking-chair-in-teak-gold-finish-5oxxms.jpg",
      prodBrand:"Brand: DZYN Furnitures",
      prodMaterial:"Primary Material: Teak Wood",
      prodPrice:34990
    },
    
    {
      prodTitle:"Allie LHS 3 Seater Sofa cum Bed with Lounger in Grey Colour",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/a/l/568x284/allie-lhs-3-seater-sofa-cum-bed-with-lounger-in-grey-colour-by-star-india-allie-lhs-3-seater-sofa-cu-h3pipb.jpg",
      prodBrand:"Brand: Star India",
      prodMaterial:"Primary Material: Leatherette",
      prodPrice:91999
    },
    
    {
      prodTitle:"Swan Lounge Chair in Blue Colour",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/s/w/568x625/swan-lounge-chair-in-blue-colour-by-furniturstation-swan-lounge-chair-in-blue-colour-by-furniturstat-ebjor2.jpg",
      prodBrand:"Brand: Furniturstation",
      prodMaterial:"Primary Material: Fabric",
      prodPrice:13600
    },
    {
      prodTitle:"Ventor Manual Pushback Recliner in Grey Colour",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/v/e/568x625/ventor-manual-pushback-recliner-in-grey-colour-by-bantia-furniture-ventor-manual-pushback-recliner-i-ocwyjq.jpg",
      prodBrand:"Brand: Bantia Furniture",
      prodMaterial:"Primary Material: Fabric",
      prodPrice:13699
    }
  
  ];


  //to access the above pvt data we declare a method
  getLivingData():Product[]{
    return this.living;
  }
*/

//now the data is not existed in this file,so now we have to make a http request to the file of the assets folder to get the data
getLivingData():Observable<Product[]>{
  //http get req
  return this.hc.get<Product[]>("assets/living.json");
}


}
