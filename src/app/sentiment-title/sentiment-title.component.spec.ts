import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentTitleComponent } from './sentiment-title.component';

describe('SentimentTitleComponent', () => {
  let component: SentimentTitleComponent;
  let fixture: ComponentFixture<SentimentTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
