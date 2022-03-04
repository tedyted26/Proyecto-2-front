import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCardComponent } from './descripcion-card.component';

describe('DescripcionCardComponent', () => {
  let component: DescripcionCardComponent;
  let fixture: ComponentFixture<DescripcionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
