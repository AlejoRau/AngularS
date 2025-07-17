import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { FormsModule } from '@angular/forms';
import { GrshopContacto } from './grshop-contacto/grshop-contacto';
import { GrshopProductos } from './grshop-productos/grshop-productos';
import { GrshopCarrito } from './grshop-carrito/grshop-carrito';
import { InputInteger } from './input-integer/input-integer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    App,
    ProductList,
    GrshopProductos,
    GrshopCarrito,
    InputInteger,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
