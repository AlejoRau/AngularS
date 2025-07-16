import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrshopProductos } from './grshop-productos';

describe('GrshopProductos', () => {
  let component: GrshopProductos;
  let fixture: ComponentFixture<GrshopProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrshopProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrshopProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
