import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListslocationComponent } from './listslocation.component';

describe('ListslocationComponent', () => {
  let component: ListslocationComponent;
  let fixture: ComponentFixture<ListslocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListslocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListslocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
