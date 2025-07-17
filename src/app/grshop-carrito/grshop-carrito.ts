import { Component } from '@angular/core';

import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';
import { ProductCart } from '../Product/product-cart';

@Component({
  selector: 'app-grshop-carrito',
  standalone: false,
  templateUrl: './grshop-carrito.html',
  styleUrl: './grshop-carrito.scss'
})
export class GrshopCarrito {
  shopList$:Observable<Product[]>;
constructor(private cart:ProductCart){
this.shopList$=cart.shopList.asObservable();
}

}
