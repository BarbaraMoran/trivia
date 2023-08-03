import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivialHomeComponent } from './trivial-home.component';

describe('TrivialHomeComponent', () => {
  let component: TrivialHomeComponent;
  let fixture: ComponentFixture<TrivialHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrivialHomeComponent]
    });
    fixture = TestBed.createComponent(TrivialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
