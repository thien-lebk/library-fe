import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbCardItemWithReviewComponent } from './lb-card-item-with-review.component';

describe('LbCardItemWithReviewComponent', () => {
  let component: LbCardItemWithReviewComponent;
  let fixture: ComponentFixture<LbCardItemWithReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LbCardItemWithReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LbCardItemWithReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
