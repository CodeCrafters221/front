import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAssistantConfigsComponent } from './ai-assistant-configs.component';

describe('AiAssistantConfigsComponent', () => {
  let component: AiAssistantConfigsComponent;
  let fixture: ComponentFixture<AiAssistantConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiAssistantConfigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiAssistantConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
