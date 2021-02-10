import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, IBookCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

    product:Product = new Product();

    cols: IBookCol[] = this.config.newBookCols;

    constructor(
        private config: ConfigService,
        private prodService: ProductService
    ) { }

    ngOnInit(): void {
        
    }

    createNewProduct() {
        this.prodService.create(this.product).subscribe(item=>{
            console.log("newProduct", item);
        });
    }

}
