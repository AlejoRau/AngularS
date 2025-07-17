import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../product-list/Product';

const URL ='https://687400e0c75558e27355e0be.mockapi.io/API/CAMISETAS/PRODUCT'
@Injectable({
  providedIn: 'root'
})
export class ProductData {

  constructor(private http :HttpClient) { }


  public getAll(): Observable<Product[]>{

return  this.http.get<Product[]>(URL)
.pipe(
  tap((products:Product[])=>products.forEach(p => {
    p.cantidad=0;
  }))
  
)
  }
}
