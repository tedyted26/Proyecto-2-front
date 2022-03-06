import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEquipoComponent } from './seccion-equipo.component';

describe('SeccionEquipoComponent', () => {
  let component: SeccionEquipoComponent;
  let fixture: ComponentFixture<SeccionEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
