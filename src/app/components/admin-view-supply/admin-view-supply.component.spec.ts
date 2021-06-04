import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSupplyComponent } from './admin-view-supply.component';

describe('AdminViewSupplyComponent', () => {
  let component: AdminViewSupplyComponent;
  let fixture: ComponentFixture<AdminViewSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
