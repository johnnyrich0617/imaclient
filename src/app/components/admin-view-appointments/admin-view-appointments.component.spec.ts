import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAppointmentsComponent } from './admin-view-appointments.component';

describe('AdminViewAppointmentsComponent', () => {
  let component: AdminViewAppointmentsComponent;
  let fixture: ComponentFixture<AdminViewAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
