import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAddedComponent } from './roles-added.component';

describe('RolesAddedComponent', () => {
  let component: RolesAddedComponent;
  let fixture: ComponentFixture<RolesAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesAddedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
