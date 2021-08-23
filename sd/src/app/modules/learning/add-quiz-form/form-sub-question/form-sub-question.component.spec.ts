import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubQuestionComponent } from './form-sub-question.component';

describe('FormSubQuestionComponent', () => {
  let component: FormSubQuestionComponent;
  let fixture: ComponentFixture<FormSubQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
