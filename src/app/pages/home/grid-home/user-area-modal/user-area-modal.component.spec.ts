import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAreaModalComponent } from './user-area-modal.component';

describe('UserAreaModalComponent', () => {
  let component: UserAreaModalComponent;
  let fixture: ComponentFixture<UserAreaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAreaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAreaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
