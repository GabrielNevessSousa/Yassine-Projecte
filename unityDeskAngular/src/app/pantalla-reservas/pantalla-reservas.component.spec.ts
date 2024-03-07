import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaReservasComponent } from './pantalla-reservas.component';

describe('PantallaReservasComponent', () => {
  let component: PantallaReservasComponent;
  let fixture: ComponentFixture<PantallaReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
