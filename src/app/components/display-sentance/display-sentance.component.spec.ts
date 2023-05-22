import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySentanceComponent } from './display-sentance.component';

describe('DisplaySentanceComponent', () => {
  let component: DisplaySentanceComponent;
  let fixture: ComponentFixture<DisplaySentanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySentanceComponent]
    });
    fixture = TestBed.createComponent(DisplaySentanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
