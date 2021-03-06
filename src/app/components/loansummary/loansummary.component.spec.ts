import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansummaryComponent } from './loansummary.component';

describe('LoansummaryComponent', () => {
  let component: LoansummaryComponent;
  let fixture: ComponentFixture<LoansummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new object', () => {
    // @ts-ignore
    const comp = new LoansummaryComponent();
    comp.ngOnInit();
    expect(comp).toBeTruthy();
  });
});
