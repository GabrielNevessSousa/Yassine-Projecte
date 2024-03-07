import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarProductoComponent } from './confirmar-producto.component';

describe('ConfirmarProductoComponent', () => {
  let component: ConfirmarProductoComponent;
  let fixture: ComponentFixture<ConfirmarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
