import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardComponent } from './student-card.component';
import {Input} from "@angular/core";

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
