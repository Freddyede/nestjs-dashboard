import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCreatedComponent } from './clients-created.component';

describe('ClientsCreatedComponent', () => {
  let component: ClientsCreatedComponent;
  let fixture: ComponentFixture<ClientsCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsCreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
