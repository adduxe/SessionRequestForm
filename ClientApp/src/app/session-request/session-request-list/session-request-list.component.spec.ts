import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRequestListComponent } from './session-request-list.component';

describe('SessionRequestListComponent', () => {
  let component: SessionRequestListComponent;
  let fixture: ComponentFixture<SessionRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
