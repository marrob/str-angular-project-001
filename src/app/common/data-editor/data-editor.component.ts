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


  products$ : Observable<Product[]> = this.productService.getAll();

  cols: IBookCol[] = this.config.bookMenuCols;

  phrase: string = '';
  key: string = 'name';
  order: string = 'id';
  
  pageSize: number = 10;
  itemCount: number = 0;
  pages: number[] = [];
  page: number = 1;

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products$.subscribe(observer => {
      this.itemCount=observer.length;
      this.computePageParams();
    });
  }

  computePageParams(){
    this.pages = [];
    for(let i=0; i<=this.itemCount/this.pageSize; i++){ 
      this.pages[i]=i+1;
    }
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(item=>console.log("onUpdate",item));
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe(item=>console.log("onDelete",item));
  }

  onChangePhrase(event: Event):void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  onChangeKey(event: Event):void {
    this.key = (event.target as HTMLInputElement).value;
    this.phrase = '';
  }
  onChangeOrder(event: Event):void {
    this.order = (event.target as HTMLInputElement).value;
  }
  onChangeHeader(key: string):void {
    this.order = key;
  }
  onChangePageSize(event: Event):void {
    this.pageSize = Number((event.target as HTMLInputElement).value);
    this.computePageParams();
    this.page = 1;
  }
  onChangePage(event: Event):void {
    this.page = Number((event.target as HTMLInputElement).value);
  }
  onNextPage(next: number){
    this.page += next;
    if(this.page<1){
      this.page = 1;
    } else if(this.pages.length<this.page){
      this.page = this.pages.length;
    }
  }

}
