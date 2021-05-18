import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BedroomDataService {

  constructor() { }
    //BEDROOM
    bedroom:Product[]=[
      {
        prodTitle:"Bergen Solid Wood King Size Bed With Storage ",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/s/o/568x625/solid-wood-king-size-bed-in-provincial-teak-finish-by-woodsworth-solid-wood-king-size-bed-in-provinc-gbialv.jpg",
        prodBrand:"Brand: Woodsworth",
        prodMaterial:"Primary Material: Sheesham Wood",
        prodPrice:56999
      },
      {
        prodTitle:"Milano Bunk Bed in Blue",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/i/568x625/milano-bunk-bed-in-blue-by-alex-daisy-milano-bunk-bed-in-blue-by-alex-daisy-9d2v9b.jpg",
        prodBrand:"Brand: Alex Daisy",
        prodMaterial:"Primary Material: Engineered Wood",
        prodPrice:109221
      },
      {
        prodTitle:"Dimora Bed Side Table in Frosty White Colour",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/d/i/568x625/dimora-bed-side-table-in-frosty-white-colour-by-a-globia-creations-dimora-bed-side-table-in-frosty-w-wvqcyc.jpg",
        prodBrand:"Brand: A GLOBIA CREATIONS",
        prodMaterial:"Primary Material: Engineered Wood",
        prodPrice:4210
      },
      {
        prodTitle:"Mavis Night Stand in Vintage Green Finish",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/a/568x625/mavis-bedside-night-stand-in-vintage-green-finish-by-fabuliv-mavis-bedside-night-stand-in-vintage-gr-jgdfww.jpg",
        prodBrand:"Brand: Fabuliv",
        prodMaterial:"Primary Material: Sheesham Wood",
        prodPrice:9037
      },
      {
        prodTitle:"Guide Writing Table in Frosty White Colour",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/g/u/568x625/guide-02-study-table-guide-02-study-table-d7nsh3.jpg",
        prodBrand:"Brand: A GLOBIA CREATIONS",
        prodMaterial:"Primary Material: Engineered Wood",
        prodPrice:11263
      },
      {
        prodTitle:"Indiana Foldable Study Table in Bavarian Beech Finish",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/i/n/568x625/indiana-foldable-study-table-in-bavarian-beech-finish-by-star-india-indiana-foldable-study-table-in--ncj7nz.jpg",
        prodBrand:"Brand: Star India",
        prodMaterial:"Primary Material: Metal",
        prodPrice:5499
      },
      {
        prodTitle:"Segur Solid Wood Large TV Console",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/s/e/568x625/segur-solid-wood-large-tv-console-in-provincial-teak-finish-by-woodsworth-segur-solid-wood-large-tv--5qvg0w.jpg",
        prodBrand:"Brand: Woodsworth",
        prodMaterial:"Primary Material: Sheesham Wood",
        prodPrice:26999
      },
      {
        prodTitle:"Barcelona Dresser In American Walnut Finish",
        prodImg:"https://ii1.pepperfry.com/media/catalog/product/b/a/568x625/barcelona-dresser-in-american-walnut-finish-by-orange-tree-barcelona-dresser-in-american-walnut-fini-04xmnk.jpg",
        prodBrand:"Brand: Orange Tree",
        prodMaterial:"Primary Material: Acacia Wood",
        prodPrice:18990
      }
    ];
    getBedroomData():Product[]{
      return this.bedroom;
    }
}
