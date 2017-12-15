import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTicketComponent } from './one-ticket.component';

describe('OneTicketComponent', () => {
  let component: OneTicketComponent;
  let fixture: ComponentFixture<OneTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
