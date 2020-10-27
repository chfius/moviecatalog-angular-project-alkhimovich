import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedashboardComponent } from './moviedashboard.component';

describe('MoviedashboardComponent', () => {
  let component: MoviedashboardComponent;
  let fixture: ComponentFixture<MoviedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
