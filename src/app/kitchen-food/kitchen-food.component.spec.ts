import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenFoodComponent } from './kitchen-food.component';

describe('KitchenFoodComponent', () => {
  let component: KitchenFoodComponent;
  let fixture: ComponentFixture<KitchenFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
