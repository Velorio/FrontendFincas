import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionpropiedadComponent } from './calificacionPropiedad.component';

describe('CalificacionpropiedadComponent', () => {
  let component: CalificacionpropiedadComponent;
  let fixture: ComponentFixture<CalificacionpropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionpropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionpropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
