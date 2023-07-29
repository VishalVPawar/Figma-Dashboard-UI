import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyboxComponent } from './moneybox.component';

describe('MoneyboxComponent', () => {
  let component: MoneyboxComponent;
  let fixture: ComponentFixture<MoneyboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyboxComponent]
    });
    fixture = TestBed.createComponent(MoneyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
