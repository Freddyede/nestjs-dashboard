import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleAuthenticationsComponent } from './double-authentications.component';

describe('DoubleAuthenticationsComponent', () => {
  let component: DoubleAuthenticationsComponent;
  let fixture: ComponentFixture<DoubleAuthenticationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleAuthenticationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleAuthenticationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
