import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListslanguagesComponent } from './listslanguages.component';

describe('ListslanguagesComponent', () => {
  let component: ListslanguagesComponent;
  let fixture: ComponentFixture<ListslanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListslanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListslanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
