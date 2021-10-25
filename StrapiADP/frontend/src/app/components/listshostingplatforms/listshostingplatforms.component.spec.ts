import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshostingplatformsComponent } from './listshostingplatforms.component';

describe('ListshostingplatformsComponent', () => {
  let component: ListshostingplatformsComponent;
  let fixture: ComponentFixture<ListshostingplatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListshostingplatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshostingplatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
