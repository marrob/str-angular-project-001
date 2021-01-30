import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  //productList: Product[] = this.productServiceService.list;
  productList: Product[] = [{id:213,catId:526,name:"Four Eyed Monsters",description:"unleash turn-key communities",image:"Potenti.tiff",price:3723,stock:65,featured:true,active:false}];

  constructor(
    private productServiceService: ProductServiceService, 
  ) { }

  ngOnInit(): void {
  }

}
