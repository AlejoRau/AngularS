import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrshopCarrito } from './grshop-carrito';

describe('GrshopCarrito', () => {
  let component: GrshopCarrito;
  let fixture: ComponentFixture<GrshopCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrshopCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrshopCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
