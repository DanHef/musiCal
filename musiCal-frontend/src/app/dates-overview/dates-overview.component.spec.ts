import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesOverviewComponent } from './dates-overview.component';

describe('DatesOverviewComponent', () => {
  let component: DatesOverviewComponent;
  let fixture: ComponentFixture<DatesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
