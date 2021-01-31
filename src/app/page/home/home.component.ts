import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product'
import { ProductService } from '../../service/product.service';
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
     * @var featuredProducts {Product[]} -  
     * 5db termék - kiemelt terméket tartalmazzon, azok közül jelenjenek meg, amelyek featured tulajdonsága true.
     */
    featuredProducts: Product[] = [];

    /**
    * @var promotionProducts {Product[]} - 5db termék - akciós termék sor.
    */
    promotionProducts: Product[] = [];


    ngOnInit(): void {

        this.featuredProducts = this.products.filter(product => product.featured);
        this.featuredProducts.sort(() => 0.5 - Math.random());
        this.featuredProducts = this.featuredProducts.slice(0, 5);

        let mixedProducts:Product[] = [...this.products];
        mixedProducts.sort(() => 0.5 - Math.random());
        this.promotionProducts = mixedProducts.slice(0, 5);
    }
}