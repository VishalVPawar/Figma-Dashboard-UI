import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtransferComponent } from './qtransfer.component';

describe('QtransferComponent', () => {
  let component: QtransferComponent;
  let fixture: ComponentFixture<QtransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QtransferComponent]
    });
    fixture = TestBed.createComponent(QtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
