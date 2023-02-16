import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseButtonComponent } from './edit-course-button.component';

describe('EditCourseButtonComponent', () => {
  let component: EditCourseButtonComponent;
  let fixture: ComponentFixture<EditCourseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
