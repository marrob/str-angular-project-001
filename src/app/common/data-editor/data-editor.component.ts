import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ConfigService, IBookCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() products: Product[] = [];

  cols: IBookCol[] = this.config.bookMenuCols;

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
  //  this.productService.update(product);
  }

  onDelete(product: Product): void {
  //  this.productService.remove(product);
  }
}
