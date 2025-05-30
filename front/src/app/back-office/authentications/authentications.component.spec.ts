import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationsComponent } from './authentications.component';

describe('AuthenticationsComponent', () => {
  let component: AuthenticationsComponent;
  let fixture: ComponentFixture<AuthenticationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
