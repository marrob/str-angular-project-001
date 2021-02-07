import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

    products$: Observable<Product[]> = this.prodService.getAll();

    newProduct:Product = new Product();



    constructor(private prodService: ProductService) { }

    ngOnInit(): void {
        this.newProduct.name ="Proba";
    }

    createNewProduct() {

        this.prodService.create(this.newProduct).subscribe(item=>{
            console.log("newProduct", item);
        });

    }

}
