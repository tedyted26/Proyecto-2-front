import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentCardComponent } from './sentiment-card.component';

describe('SentimentCardComponent', () => {
  let component: SentimentCardComponent;
  let fixture: ComponentFixture<SentimentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
