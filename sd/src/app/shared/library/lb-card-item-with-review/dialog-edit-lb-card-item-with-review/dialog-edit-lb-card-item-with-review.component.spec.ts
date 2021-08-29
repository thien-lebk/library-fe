import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditLbCardItemWithReviewComponent } from './dialog-edit-lb-card-item-with-review.component';

describe('DialogEditLbCardItemWithReviewComponent', () => {
  let component: DialogEditLbCardItemWithReviewComponent;
  let fixture: ComponentFixture<DialogEditLbCardItemWithReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditLbCardItemWithReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditLbCardItemWithReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
