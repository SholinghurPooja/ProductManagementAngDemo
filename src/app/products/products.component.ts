import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

/*products:Product[]=[
  {
  prodTitle:"Apple Watch Blue Aluminium Case with Sport Band",
  prodImg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAU2_VW_34FR+watch-40-alum-blue-cell-6s_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1599010468000,1601920119000',
  prodDesc:"The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy.The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure."
  },
  {
    prodTitle:"Facets from Raga by Titan - Pink Dial Analog Watch",
    prodImg:"https://staticimg.titan.co.in/Titan/Catalog/95118WM02_3.jpg?pView=pdp",
    prodDesc:"A treasure trove of sublime features like mother of pearl, Swarovski crystals and rose gold plating, all unify into exquisite watches that depict modern minimalism in an exotic, poetic manner. With this collection we bring to you watches that are as unique as its bearer."
  },
  {
    prodTitle:"TITAN Edge in Ceramic - Slimmest Watch",
    prodImg:"https://staticimg.titan.co.in/Titan/Catalog/2653NC01_1.jpg?pView=pdp",
    prodDesc:"This collection highlights your sublime style with its fine craftsmanship. With a look that is inspired by minimalism, these classical yet modern watches look dapper on casuals as well as formals! Explore the Titan Edge collection, now available in two new futuristic colours! Our slimmest marvel – the Ceramic Edge, just got a bit more irresistible..."
  },
  {
    prodTitle:"Gen 5E Smartwatch Black Silicone",
    prodImg:"https://fossil.scene7.com/is/image/FossilPartners/FTW4047_main?$sfcc_fos_large$",
    prodDesc:"Tech for real life. This 44mm Gen 5E touchscreen smartwatch features a black silicone strap, speaker functionality, 4GB storage capacity and three smart battery modes to extend battery life for multiple days. Smartwatches powered with Wear OS by Google are compatible with iPhone® and Android™ phones. Wear OS by Google and other related marks are trademarks of Google LLC."
  },
  {
    prodTitle:"Tommy Hilfiger READE ROUND Analog SILVER Dial",
    prodImg:"https://www.helioswatchstore.com/sites/default/files/1782209_LRG_rgb_Web.jpg",
    prodDesc:"Country of Origin	India,Waterproof 3 ATM,Display Type	Analogue,Strap Color	Two Tone,Dial Shape	Round,Dial Color	Silver,Strap Type	Stainless Steel,Strap Style	Bracelet"
  },
  {
    prodTitle:"DIESEL DZ4290I Men Chronograph Watch",
    prodImg:"https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/LI8486_01-1200.jpg",
    prodDesc:"The modern wristwatch MEGA CHIEF by DIESEL inspires with clear lines and sophisticated design. The striking model with brown leather strap proves its masculinity unquestionably and emphatically - not only through the hip logo lettering on the grey dial. The white hands and indices stand out clearly and are precisely driven by the analogue quartz movement. "
  },
  {
    prodTitle:"Diesel Mega Chief Chronograph Black Dial ",
    prodImg:"https://images-na.ssl-images-amazon.com/images/I/81B2lt8uzML._AC_UX342_.jpg",
    prodDesc:"Fixed black ion-plated stainless steel bezel. Black dial with skeleton hands and index hour markers.Minute markers around the outer rim. Dial Type: Analog.Chronograph - three sub-dials displaying: 60 second, 60 minute and 1/10th of a second. Quartz movement. Scratch resistant iridescent mineral crystal. Pull / push crown. Solid case back.Tang clasp. Water resistant at 100 meters / 330 feet. Functions: chronograph, date, hour, minute, second. Casual watch style."
  },
  {
    prodTitle:"Fossil ME3098 Townsman Dark Brown Watch For Men",
    prodImg:"https://images-static.nykaa.com/media/catalog/product/9/0/9098b50me3098-1.jpg",
    prodDesc:"The top-of-the-hour Townsman automatic takes its cues from vintage designs.A refined black case houses an amber crystal lens and a see-through skeleton dial. The automatic movement features a built-in rotor that’s powered by the motion of your wrist - no battery required."
  }
];
*/



//taking an array that will receive all the data sent by child
productsSentByChild=[];
prodCount:number=0;
getProductDetailsFromChild(prodTitle){
  this.productsSentByChild.push(prodTitle);
  this.prodCount++;
}
}
