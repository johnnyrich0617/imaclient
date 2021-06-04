import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCitizenComponent } from './validate-citizen.component';

describe('ValidateCitizenComponent', () => {
  let component: ValidateCitizenComponent;
  let fixture: ComponentFixture<ValidateCitizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateCitizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
