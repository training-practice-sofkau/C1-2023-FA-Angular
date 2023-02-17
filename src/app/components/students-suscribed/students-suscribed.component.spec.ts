import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSuscribedComponent } from './students-suscribed.component';

describe('StudentsSuscribedComponent', () => {
  let component: StudentsSuscribedComponent;
  let fixture: ComponentFixture<StudentsSuscribedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsSuscribedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsSuscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
