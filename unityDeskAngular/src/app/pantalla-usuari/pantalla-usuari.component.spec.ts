import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaUsuariComponent } from './pantalla-usuari.component';

describe('PantallaUsuariComponent', () => {
  let component: PantallaUsuariComponent;
  let fixture: ComponentFixture<PantallaUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaUsuariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
