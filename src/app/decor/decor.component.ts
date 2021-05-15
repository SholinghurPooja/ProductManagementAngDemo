import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.css']
})
export class DecorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  decor:Product[]=[
    {
      prodTitle:"Red Wrought Iron Decorative Wall Clock",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/r/e/568x625/red-wrought-iron-snowy-bike-with-watch-wall-art-by-decocraft-red-wrought-iron-snowy-bike-with-watch--hqvgkq.jpg",
      prodBrand:"Brand: Decocraft",
      prodMaterial:"Material: Wrought Iron",
      prodPrice:2400
    },
    {
      prodTitle:"Gold Wrought Iron Analog Wall Clock",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/g/o/568x625/gold-wrought-iron-cycle-watch-wall-art-by-b-k-exports-gold-wrought-iron-cycle-watch-wall-art-by-b-k--v4qn9b.jpg",
      prodBrand:"Brand: B K Exports",
      prodMaterial:"Material: Wrought Iron",
      prodPrice:2400
    },
    {
      prodTitle:"Metal Wall Shelf in Brown Colour",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/e/n/568x625/engineered-wood-wallshelf-in-multicolor-engineered-wood-wallshelf-in-multicolor-7x9tqv.jpg",
      prodBrand:"Brand: WallMantra",
      prodMaterial:"Material: Metal",
      prodPrice:3199
    },
    {
      prodTitle:"Florito Solid Wood Square Wall Shelf",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/f/l/568x625/florito-solid-wood-boxy-wall-shelf-in-honey-oak-finish-by-woodsworth-florito-solid-wood-boxy-wall-sh-svl4da.jpg",
      prodBrand:"Brand: WoodenMood",
      prodMaterial:"Material: Solid Wood",
      prodPrice:10599
    },
    {
      prodTitle:"Multicolor Wood Mother Nature Wall Art",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/u/568x625/multicolor-wood-mother-nature-wall-art-by-posh-n-plush-multicolor-wood-mother-nature-wall-art-by-pos-4yakog.jpg",
      prodBrand:"Brand: POSH N PLUSH",
      prodMaterial:"Material: Wood",
      prodPrice:1729
    },
    {
      prodTitle:"Multicolour MDF Printed Colorful Abstract",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/u/568x625/multicolour-mdf-printed-colorful-abstract-multi-frame-painting-by-999store-multicolour-mdf-printed-c-ldcqlq.jpg",
      prodBrand:"Brand: 999Store",
      prodMaterial:"Material: MDF",
      prodPrice:4839
    },
    {
      prodTitle:"Metal Avenger Bike In Copper Table Decor",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/m/e/568x625/metal-antique-gold-and-copper-figurines-by-malik-design-metal-antique-gold-and-copper-figurines-by-m-31lefc.jpg",
      prodBrand:"Brand: Malik Design",
      prodMaterial:"Material: Metal",
      prodPrice:1029
    },
    {
      prodTitle:"Wrought Iron Decorative Frame In Multicolor Wall Art",
      prodImg:"https://ii1.pepperfry.com/media/catalog/product/c/o/568x625/colorful-flowers-in-frame-metal-wall-d-cor-hanging-large-wall-sculpture-by-craftter-colorful-flowers-cvshsx.jpg",
      prodBrand:"Brand: Craftte",
      prodMaterial:"Material: Wrought Iron",
      prodPrice:5459
    }
    
  

  ];
}
