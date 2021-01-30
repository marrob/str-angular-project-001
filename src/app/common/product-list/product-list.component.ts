import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() tests: number[] = Array.from(Array(50).keys()).map((item,idx) => idx+1);

  constructor() { }

  ngOnInit(): void {
  }

}
