import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDeveloperComponent } from './portfolio-developer.component';

describe('PortfolioDeveloperComponent', () => {
  let component: PortfolioDeveloperComponent;
  let fixture: ComponentFixture<PortfolioDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
