import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployedComponent } from './edit-employed.component';

describe('EditEmployedComponent', () => {
  let component: EditEmployedComponent;
  let fixture: ComponentFixture<EditEmployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
