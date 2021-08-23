import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxTrueFalseComponent } from './check-box-true-false.component';

describe('CheckBoxTrueFalseComponent', () => {
  let component: CheckBoxTrueFalseComponent;
  let fixture: ComponentFixture<CheckBoxTrueFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxTrueFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
