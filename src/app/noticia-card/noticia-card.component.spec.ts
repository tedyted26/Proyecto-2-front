import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCardComponent } from './noticia-card.component';

describe('NoticiaCardComponent', () => {
  let component: NoticiaCardComponent;
  let fixture: ComponentFixture<NoticiaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
