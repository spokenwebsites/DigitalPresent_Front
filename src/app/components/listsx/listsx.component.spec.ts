import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsxComponent } from './listsx.component';

describe('ListsxComponent', () => {
  let component: ListsxComponent;
  let fixture: ComponentFixture<ListsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
