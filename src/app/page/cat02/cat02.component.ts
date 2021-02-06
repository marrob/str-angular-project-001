import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService} from '../../service/product.service';
import { CategoryService} from '../../service/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  constructor(
    private productService: ProductService,
    private categoryService:CategoryService,
 ) { }

products: Product[] = this.productService.list;
categories: Category[] = this.categoryService.list;

/**
 * @var catName {Product[]} -  Ezt Hogyan tudom megszerezni? 
 */
catName: string = this.categories[1].name;

/**
 * @var featuredProducts {Product[]} -  5db termék - kiemelt terméket tartalmazzon, azok közül jelenjenek meg, amelyek featured tulajdonsága true.
 */
featuredProducts: Product[] = [];


/**
 * @var filteredProducts {Product[]} -  A kategóriára leszürt könyvek listája
 */
filteredProducts: Product[] = [];


name:string = "";

ngOnInit(): void {
    let currentCatId = this.categories[1].id;
    
    this.filteredProducts = this.products.filter(item => item.catId == currentCatId);
    

    this.featuredProducts = this.filteredProducts.filter(product => product.featured)
                                                .sort(() => 0.5 - Math.random())
                                                .slice(0, 5);
}
}
