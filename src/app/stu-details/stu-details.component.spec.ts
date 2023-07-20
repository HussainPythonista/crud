import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDetailsComponent } from './stu-details.component';

describe('StuDetailsComponent', () => {
  let component: StuDetailsComponent;
  let fixture: ComponentFixture<StuDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuDetailsComponent]
    });
    fixture = TestBed.createComponent(StuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
