import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUpdatedComponent } from './clients-details.component';

describe('ClientsDetailsComponent', () => {
  let component: ClientsUpdatedComponent;
  let fixture: ComponentFixture<ClientsUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsUpdatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
