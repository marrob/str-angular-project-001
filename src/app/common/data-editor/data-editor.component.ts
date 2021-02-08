import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, IBookCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
    selector: 'app-data-editor',
    templateUrl: './data-editor.component.html',
    styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

    products$: Observable<Product[]> = this.productService.getAll();

    cols: IBookCol[] = this.config.bookMenuCols;

    phrase: string = '';
    key: string = 'name';
    order: string = '';


    constructor(
        private config: ConfigService,
        private productService: ProductService
    ) { }

    ngOnInit(): void {
    }

    onUpdate(product: Product): void {
        this.productService.update(product).subscribe(item => console.log("onUpdate", item));
    }

    onDelete(product: Product): void {
        this.productService.remove(product).subscribe(item => console.log("onDelete", item));
    }

    onChangePhrase(event: Event): void {
        this.phrase = (event.target as HTMLInputElement).value;
    }
    onChangeKey(event: Event): void {
        this.key = (event.target as HTMLInputElement).value;
        this.phrase = '';
    }
    onChangeOrder(event: Event): void {
        this.order = (event.target as HTMLInputElement).value;
    }

    onHeaderClick(event: Event): void {
        let headerText = (event.target as HTMLInputElement).textContent;
        let colKeyByText = this.config.bookMenuCols.filter(item => item.text == headerText.trim());
        //console.log("onHeaderClick", "headerText:",headerText, "Key:", colKeyByText[0].key) ;
        if (colKeyByText.length > 0 ) {
            this.order = colKeyByText[0].key;
        }
    }

}
