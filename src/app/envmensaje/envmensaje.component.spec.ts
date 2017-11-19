import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvmensajeComponent } from './envmensaje.component';

describe('EnvmensajeComponent', () => {
  let component: EnvmensajeComponent;
  let fixture: ComponentFixture<EnvmensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvmensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvmensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
