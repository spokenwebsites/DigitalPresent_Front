import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard2020Component } from './dashboard2020.component';

describe('Dashboard2020Component', () => {
  let component: Dashboard2020Component;
  let fixture: ComponentFixture<Dashboard2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
