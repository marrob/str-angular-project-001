import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  phrase: string = '';

  @Input() products: Product[] = [];
  @Input() test_products: any[] = Array.from(Array(50).keys()).map((item,idx) => ({name: idx+1}));

  constructor() { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event):void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}
