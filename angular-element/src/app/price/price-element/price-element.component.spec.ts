import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceElementComponent } from './price-element.component';

describe('PriceElementComponent', () => {
  let component: PriceElementComponent;
  let fixture: ComponentFixture<PriceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
