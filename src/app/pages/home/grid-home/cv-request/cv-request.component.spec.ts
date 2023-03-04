import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRequestComponent } from './cv-request.component';

describe('CvRequestComponent', () => {
  let component: CvRequestComponent;
  let fixture: ComponentFixture<CvRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
