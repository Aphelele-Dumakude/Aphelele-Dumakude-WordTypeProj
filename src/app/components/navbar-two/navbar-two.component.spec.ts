import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTwoComponent } from './navbar-two.component';

describe('NavbarTwoComponent', () => {
  let component: NavbarTwoComponent;
  let fixture: ComponentFixture<NavbarTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarTwoComponent]
    });
    fixture = TestBed.createComponent(NavbarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
