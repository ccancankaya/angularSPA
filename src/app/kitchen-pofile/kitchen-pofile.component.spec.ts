import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPofileComponent } from './kitchen-pofile.component';

describe('KitchenPofileComponent', () => {
  let component: KitchenPofileComponent;
  let fixture: ComponentFixture<KitchenPofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenPofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenPofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
