import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from './Product';

import { ProductCart } from '../Product/product-cart';
import { ProductData } from '../Product/product-data';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
   styleUrls: ['./product-list.scss']  
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(
    private cart: ProductCart,
    private productDataService: ProductData
  ) {}

  ngOnInit(): void {
    this.productDataService.getAll().subscribe(products => {
      
      products.forEach(p => {
        const cantidadEnCarrito = this.cart.getQuantityInCart(p.id as number);
        p.stock -= cantidadEnCarrito;
        
        p.cantidad = 0;
      });

      this.products = products;
      console.log(this.products);
    });
  }

  AddToCart(product: Product): void {
    if (product.cantidad > 0 && product.cantidad<=product.stock) {
      this.cart.AddToCart(product);
      product.stock -= product.cantidad;
      product.cantidad = 0; 
    }
  }

  maxReached($event: number) {
   
  }
}
