import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFormCardComponent } from './lb-form-card.component';

describe('LbFormCardComponent', () => {
  let component: LbFormCardComponent;
  let fixture: ComponentFixture<LbFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LbFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
