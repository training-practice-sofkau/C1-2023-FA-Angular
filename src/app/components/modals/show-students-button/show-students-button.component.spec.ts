import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentsButtonComponent } from './show-students-button.component';

describe('ShowStudentsButtonComponent', () => {
  let component: ShowStudentsButtonComponent;
  let fixture: ComponentFixture<ShowStudentsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStudentsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
