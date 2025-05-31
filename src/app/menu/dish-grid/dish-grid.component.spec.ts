import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishGridComponent } from './dish-grid.component';

describe('DishGridComponent', () => {
  let component: DishGridComponent;
  let fixture: ComponentFixture<DishGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
