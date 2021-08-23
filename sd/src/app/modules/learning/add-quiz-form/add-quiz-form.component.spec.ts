import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizFormComponent } from './add-quiz-form.component';

describe('AddQuizFormComponent', () => {
  let component: AddQuizFormComponent;
  let fixture: ComponentFixture<AddQuizFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuizFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
