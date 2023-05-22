import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwordComponent } from './addword.component';

describe('AddwordComponent', () => {
  let component: AddwordComponent;
  let fixture: ComponentFixture<AddwordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddwordComponent]
    });
    fixture = TestBed.createComponent(AddwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
