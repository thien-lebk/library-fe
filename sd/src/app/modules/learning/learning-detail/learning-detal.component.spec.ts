import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDetalComponent } from './learning-detal.component';

describe('LearningDetalComponent', () => {
  let component: LearningDetalComponent;
  let fixture: ComponentFixture<LearningDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningDetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
