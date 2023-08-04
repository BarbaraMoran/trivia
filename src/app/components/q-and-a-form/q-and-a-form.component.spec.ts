import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAndAFormComponent } from './q-and-a-form.component';

describe('QAndAFormComponent', () => {
  let component: QAndAFormComponent;
  let fixture: ComponentFixture<QAndAFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QAndAFormComponent]
    });
    fixture = TestBed.createComponent(QAndAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
