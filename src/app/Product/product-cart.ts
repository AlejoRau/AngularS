import { Injectable } from '@angular/core';
import { Product } from '../product-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCart {
  getQuantityInCart(productId: number): number {
  const item = this._shopList.find(p => p.id === productId);
  return item ? item.cantidad : 0;
}
  
  constructor() { 
   
  }
  private _shopList :Product[]= [];
shopList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);


  AddToCart(product: Product) {
   let item = this._shopList.find((v1) => v1.nombre === product.nombre);
if (!item) {
  this._shopList.push({...product}); 
}else {
  item.cantidad+=product.cantidad;
}
    
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }

}
