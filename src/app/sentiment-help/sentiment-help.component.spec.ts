import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentHelpComponent } from './sentiment-help.component';

describe('SentimentHelpComponent', () => {
  let component: SentimentHelpComponent;
  let fixture: ComponentFixture<SentimentHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
