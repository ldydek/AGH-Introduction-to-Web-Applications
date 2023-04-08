import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingJourneyComponent } from './adding-journey.component';

describe('AddingJourneyComponent', () => {
  let component: AddingJourneyComponent;
  let fixture: ComponentFixture<AddingJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
