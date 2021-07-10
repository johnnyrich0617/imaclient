import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewLocationsComponent } from './view-locations.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {of} from 'rxjs';

const ActivatedRouteSpy = {
  snapshot: {
    paramMap: convertToParamMap({
      some: 'some',
      else: 'else',
    })
  },
  queryParamMap: of(
    convertToParamMap({
      some: 'some',
      else: 'else',
    })
  )
};

const RouterSpy = jasmine.createSpyObj(
  'Router',
  ['navigate']
);

describe('ViewLocationsComponent', () => {
  let component: ViewLocationsComponent;
  let fixture: ComponentFixture<ViewLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [ ViewLocationsComponent ],
      providers: [
        { provide: ActivatedRoute,   useValue: ActivatedRouteSpy    },
        { provide: Router,           useValue: RouterSpy            }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
