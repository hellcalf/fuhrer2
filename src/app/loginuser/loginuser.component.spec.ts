import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuserComponent } from './loginuser.component';

describe('LoginuserComponent', () => {
  let component: LoginuserComponent;
  let fixture: ComponentFixture<LoginuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
