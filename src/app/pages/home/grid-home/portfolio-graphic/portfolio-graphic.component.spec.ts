import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGraphicComponent } from './portfolio-graphic.component';

describe('PortfolioGraphicComponent', () => {
  let component: PortfolioGraphicComponent;
  let fixture: ComponentFixture<PortfolioGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
