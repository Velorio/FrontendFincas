import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionarrendatarioComponent } from './calificacionArrendatario.component';

describe('CalificacionarrendatarioComponent', () => {
  let component: CalificacionarrendatarioComponent;
  let fixture: ComponentFixture<CalificacionarrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionarrendatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionarrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
