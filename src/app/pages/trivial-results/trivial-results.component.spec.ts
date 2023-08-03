import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivialResultsComponent } from './trivial-results.component';

describe('TrivialResultsComponent', () => {
  let component: TrivialResultsComponent;
  let fixture: ComponentFixture<TrivialResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrivialResultsComponent]
    });
    fixture = TestBed.createComponent(TrivialResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
