import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentButtonComponent } from './edit-student-button.component';

describe('EditStudentButtonComponent', () => {
  let component: EditStudentButtonComponent;
  let fixture: ComponentFixture<EditStudentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
