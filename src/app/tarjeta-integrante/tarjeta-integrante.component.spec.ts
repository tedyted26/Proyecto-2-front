import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaIntegranteComponent } from './tarjeta-integrante.component';

describe('TarjetaIntegranteComponent', () => {
  let component: TarjetaIntegranteComponent;
  let fixture: ComponentFixture<TarjetaIntegranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaIntegranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
