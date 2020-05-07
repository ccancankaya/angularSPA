import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddTwoComponent } from './food-add-two.component';

describe('FoodAddTwoComponent', () => {
  let component: FoodAddTwoComponent;
  let fixture: ComponentFixture<FoodAddTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
