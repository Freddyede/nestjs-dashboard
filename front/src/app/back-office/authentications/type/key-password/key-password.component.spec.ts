import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPasswordComponent } from './key-password.component';

describe('KeyPasswordComponent', () => {
  let component: KeyPasswordComponent;
  let fixture: ComponentFixture<KeyPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
