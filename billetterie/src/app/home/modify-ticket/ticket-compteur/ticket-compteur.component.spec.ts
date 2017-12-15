import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCompteurComponent } from './ticket-compteur.component';

describe('TicketCompteurComponent', () => {
  let component: TicketCompteurComponent;
  let fixture: ComponentFixture<TicketCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
