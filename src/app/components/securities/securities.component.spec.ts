import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesComponent } from './securities.component';

describe('SecuritiesComponent', () => {
  let component: SecuritiesComponent;
  let fixture: ComponentFixture<SecuritiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecuritiesComponent]
    });
    fixture = TestBed.createComponent(SecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
