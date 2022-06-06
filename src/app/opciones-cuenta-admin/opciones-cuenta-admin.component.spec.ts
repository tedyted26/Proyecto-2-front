import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesCuentaAdminComponent } from './opciones-cuenta-admin.component';

describe('OpcionesCuentaAdminComponent', () => {
  let component: OpcionesCuentaAdminComponent;
  let fixture: ComponentFixture<OpcionesCuentaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesCuentaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesCuentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
