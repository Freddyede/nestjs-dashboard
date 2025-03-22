import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationsDetailComponentComponent } from './authentications-detail-component.component';

describe('AuthenticationsDetailComponentComponent', () => {
  let component: AuthenticationsDetailComponentComponent;
  let fixture: ComponentFixture<AuthenticationsDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationsDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationsDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
