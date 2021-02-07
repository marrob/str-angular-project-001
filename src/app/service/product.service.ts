import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient){}

    
    jsonUrl:string = "http://localhost:3000/list";

    getAll():Observable<Product[]> {
        return this.http.get<Product[]>(this.jsonUrl);
    }

    getOne(id: string | number): Observable<Product>{
        return this.http.get<Product>( `${this.jsonUrl}/${id}` );
    }

    create(product: Product): Observable<any> {
        return this.http.post<Product>(this.jsonUrl,product);
    }

    update(product: Product): Observable<any>{
        return this.http.put( `${this.jsonUrl}/${product.id}`, product );
    }
    remove(product: Product): Observable<any>{
        try{
            // const id =
            //     typeof product === 'string' ? product :
            //     typeof product === 'number' ? product :
            //     product.id;
                return this.http.delete( `${this.jsonUrl}/${product.id}` );
        }
        catch(err){
            console.log(`Error when removing product ${product}:
            'id' is undefined`);
        }
    }
}
