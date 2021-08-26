import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCommonComponent } from './loading-common.component';

describe('LoadingCommonComponent', () => {
  let component: LoadingCommonComponent;
  let fixture: ComponentFixture<LoadingCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
