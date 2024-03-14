import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaProductoLleidaComponent } from './pantalla-producto-lleida.component';

describe('PantallaProductoLleidaComponent', () => {
  let component: PantallaProductoLleidaComponent;
  let fixture: ComponentFixture<PantallaProductoLleidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaProductoLleidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaProductoLleidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
