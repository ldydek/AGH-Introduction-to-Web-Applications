import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingViewComponent } from './starting-view.component';

describe('StartingViewComponent', () => {
  let component: StartingViewComponent;
  let fixture: ComponentFixture<StartingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
