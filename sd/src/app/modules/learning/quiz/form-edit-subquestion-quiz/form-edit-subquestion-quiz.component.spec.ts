import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditSubquestionQuizComponent } from './form-edit-subquestion-quiz.component';

describe('FormEditSubquestionQuizComponent', () => {
  let component: FormEditSubquestionQuizComponent;
  let fixture: ComponentFixture<FormEditSubquestionQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditSubquestionQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditSubquestionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
