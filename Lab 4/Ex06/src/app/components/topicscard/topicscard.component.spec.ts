import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicscardComponent } from './topicscard.component';

describe('TopicscardComponent', () => {
  let component: TopicscardComponent;
  let fixture: ComponentFixture<TopicscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
