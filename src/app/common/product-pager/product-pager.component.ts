import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
    selector: 'app-product-pager',
    templateUrl: './product-pager.component.html',
    styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit, OnChanges {

    @Input() products: Product[] = [];
    onlyFiveProducts:Product[] = [];
    constructor() { }
    index:number = 0;
    ngOnInit(): void {
    }

    ngOnChanges(){
        this.onlyFiveProducts = this.products.slice(0,5);
    }
    onRightClick() { 
        if(this.index == this.products.length - 5 ){
            return;
        }
        this.index++;
        this.onlyFiveProducts = this.products.slice(this.index,5 + this.index);
        console.log('onRight', this.index, 5 + this.index);
    }

    onLeftClick() {
        if(this.index == 0){
            return;
        }
        this.index--;
       
        this.onlyFiveProducts = this.products.slice(this.index, 5 + this.index);
        console.log('onLeftClick', this.index, 5 + this.index);
    }
}
