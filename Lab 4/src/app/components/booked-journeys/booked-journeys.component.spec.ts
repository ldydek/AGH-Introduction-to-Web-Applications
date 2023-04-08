import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedJourneysComponent } from './booked-journeys.component';

describe('BookedJourneysComponent', () => {
  let component: BookedJourneysComponent;
  let fixture: ComponentFixture<BookedJourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedJourneysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedJourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
