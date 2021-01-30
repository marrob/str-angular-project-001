import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product'
import { ProductService} from '../../service/product.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    /**
     * @var products {Product[]} - Ezt meg kell adnodh hogy használni lehesssen
     */
    products: Product[] = this.productService.list;

    constructor(
        private productService: ProductService,
        
        ) { }

    /**
     * @var feturedProducts {Product[]} -  5db termék - kiemelt terméket tartalmazzon, azok közül jelenjenek meg, amelyek featured tulajdonsága true.
     */
    feturedProducts: Product[] = [];

    /**
    * @var promotionProducts {Product[]} - 5db termék - akciós termék sor.
    */
    promotionProducts: Product[] = [];


    ngOnInit(): void {

        let onlyFeatured = this.products.filter(item => item.featured == true);
        this.feturedProducts = [];
        for (let i = 0; i < 5; i++) {
            const index = Math.floor(Math.random() * onlyFeatured.length);
            this.feturedProducts.push(onlyFeatured[index]);
        }
        this.promotionProducts = [];
        for (let i = 0; i < 5; i++) {
            const index = Math.floor(Math.random() * this.products.length);
            this.promotionProducts.push(this.products[index])
        }
    }
}
