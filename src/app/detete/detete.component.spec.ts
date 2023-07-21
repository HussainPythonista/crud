import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteteComponent } from './detete.component';

describe('DeteteComponent', () => {
  let component: DeteteComponent;
  let fixture: ComponentFixture<DeteteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeteteComponent]
    });
    fixture = TestBed.createComponent(DeteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
