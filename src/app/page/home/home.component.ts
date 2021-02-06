import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    products$: Observable<Product[]> = this.productService.getAll();

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
        this.products$.subscribe(items => {
            this.featuredProducts = items.filter(product => product.featured);
            this.featuredProducts.sort(() => 0.5 - Math.random());
            this.featuredProducts = this.featuredProducts.slice(0, 10);

            let mixedProducts: Product[] = [...items];
            mixedProducts.sort(() => 0.5 - Math.random());
            this.promotionProducts = mixedProducts.slice(0, 10);
        });
    }
}