import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrshopContacto } from './grshop-contacto';

describe('GrshopContacto', () => {
  let component: GrshopContacto;
  let fixture: ComponentFixture<GrshopContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrshopContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrshopContacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
