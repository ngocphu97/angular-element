import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaActionComponent } from './media-action.component';

describe('MediaActionComponent', () => {
  let component: MediaActionComponent;
  let fixture: ComponentFixture<MediaActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
