import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemPopupComponent } from './edit-item-popup.component';

describe('EditItemPopupComponent', () => {
  let component: EditItemPopupComponent;
  let fixture: ComponentFixture<EditItemPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
