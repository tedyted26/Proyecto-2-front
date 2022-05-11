import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadAdminComponent } from './estad-admin.component';

describe('EstadAdminComponent', () => {
  let component: EstadAdminComponent;
  let fixture: ComponentFixture<EstadAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
