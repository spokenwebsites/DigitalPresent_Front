import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsskyisblueComponent } from './detailsskyisblue.component';

describe('DetailsskyisblueComponent', () => {
  let component: DetailsskyisblueComponent;
  let fixture: ComponentFixture<DetailsskyisblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsskyisblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsskyisblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
