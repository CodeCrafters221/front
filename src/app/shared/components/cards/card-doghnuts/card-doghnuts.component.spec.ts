import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoghnutsComponent } from './card-doghnuts.component';

describe('CardDoghnutsComponent', () => {
  let component: CardDoghnutsComponent;
  let fixture: ComponentFixture<CardDoghnutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDoghnutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDoghnutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
