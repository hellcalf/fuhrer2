import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraruserComponent } from './registraruser.component';

describe('RegistraruserComponent', () => {
  let component: RegistraruserComponent;
  let fixture: ComponentFixture<RegistraruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
