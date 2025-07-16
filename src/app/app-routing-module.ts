import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrshopProductos } from './grshop-productos/grshop-productos';
import { GrshopContacto } from './grshop-contacto/grshop-contacto';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component : GrshopProductos
  },
   {
    path:'contacto',
    component : GrshopContacto
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
