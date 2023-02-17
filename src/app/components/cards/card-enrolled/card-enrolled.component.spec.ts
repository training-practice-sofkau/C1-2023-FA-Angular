import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnrolledComponent } from './card-enrolled.component';

describe('CardEnrolledComponent', () => {
  let component: CardEnrolledComponent;
  let fixture: ComponentFixture<CardEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEnrolledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
