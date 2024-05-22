import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSocialTraficComponent } from './card-social-trafic.component';

describe('CardSocialTraficComponent', () => {
  let component: CardSocialTraficComponent;
  let fixture: ComponentFixture<CardSocialTraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSocialTraficComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSocialTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
