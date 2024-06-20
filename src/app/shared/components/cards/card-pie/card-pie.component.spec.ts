import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpieComponent } from './card-pie.component';

describe('CardpieComponent', () => {
  let component: CardpieComponent;
  let fixture: ComponentFixture<CardpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardpieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
