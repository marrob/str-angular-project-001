import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService} from '../../service/product.service';
import { CategoryService} from '../../service/category.service';
import { Category } from 'src/app/model/category';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-cat01',
    templateUrl: './cat01.component.html',
    styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

    constructor(
        private productService: ProductService,
        private categoryService:CategoryService,
     //   private route: ActivatedRoute,
    ) { }
    
    products: Product[] = this.productService.list;
    categories: Category[] = this.categoryService.list;

    /**
     * @var catName {Product[]} -  Ezt Hogyan tudom megszerezni? 
     */
    catName: string = this.categories[0].name;

    /**
     * @var feturedProducts {Product[]} -  5db termék - kiemelt terméket tartalmazzon, azok közül jelenjenek meg, amelyek featured tulajdonsága true.
     */
    feturedProducts: Product[] = [];

    
    /**
     * @var feturedProducts {Product[]} -  A kategóriára leszürt könyvek listája
     */
    filteredProducts: Product[] = this.productService.list.filter(item => item.name===this.catName);

    
    name:string = "";

    ngOnInit(): void {
        /*
        this.route.queryParams.subscribe(params => {
            this.name = params['name'];
          });
        */
        let currentCatId = this.categories.filter((item => item.name == this.catName ))[0].id;
        
        this.filteredProducts = this.products.filter(item => item.catId == currentCatId);
        
        let onlyFeatured = this.products.filter(item => item.featured == true && item.catId == currentCatId);
        this.feturedProducts = [];
        for (let i = 0; i < 5; i++) {
            const index = Math.floor(Math.random() * onlyFeatured.length);
            this.feturedProducts.push(onlyFeatured[index]);
        }
    }
}
