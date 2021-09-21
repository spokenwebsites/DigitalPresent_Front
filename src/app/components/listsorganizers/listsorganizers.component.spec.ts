import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsorganizersComponent } from './listsorganizers.component';

describe('ListsorganizersComponent', () => {
  let component: ListsorganizersComponent;
  let fixture: ComponentFixture<ListsorganizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsorganizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsorganizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
