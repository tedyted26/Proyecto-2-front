import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaError404Component } from './pagina-error404.component';

describe('PaginaError404Component', () => {
  let component: PaginaError404Component;
  let fixture: ComponentFixture<PaginaError404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaError404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
