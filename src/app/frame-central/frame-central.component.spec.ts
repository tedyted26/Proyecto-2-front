import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameCentralComponent } from './frame-central.component';

describe('FrameCentralComponent', () => {
  let component: FrameCentralComponent;
  let fixture: ComponentFixture<FrameCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
