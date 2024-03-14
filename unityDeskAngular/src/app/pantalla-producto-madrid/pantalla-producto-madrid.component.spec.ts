import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaProductoMadridComponent } from './pantalla-producto-madrid.component';

describe('PantallaProductoMadridComponent', () => {
  let component: PantallaProductoMadridComponent;
  let fixture: ComponentFixture<PantallaProductoMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaProductoMadridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaProductoMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
