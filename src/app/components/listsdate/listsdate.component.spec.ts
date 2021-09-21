import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsdateComponent } from './listsdate.component';

describe('ListsdateComponent', () => {
  let component: ListsdateComponent;
  let fixture: ComponentFixture<ListsdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
