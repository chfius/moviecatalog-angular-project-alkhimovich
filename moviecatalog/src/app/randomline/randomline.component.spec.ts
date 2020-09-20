import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomlineComponent } from './randomline.component';

describe('RandomlineComponent', () => {
  let component: RandomlineComponent;
  let fixture: ComponentFixture<RandomlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
