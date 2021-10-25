import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstreereadingComponent } from './detailstreereading.component';

describe('DetailstreereadingComponent', () => {
  let component: DetailstreereadingComponent;
  let fixture: ComponentFixture<DetailstreereadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstreereadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstreereadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
