import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployedComponent } from './add-employed.component';

describe('AddEmployedComponent', () => {
  let component: AddEmployedComponent;
  let fixture: ComponentFixture<AddEmployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
