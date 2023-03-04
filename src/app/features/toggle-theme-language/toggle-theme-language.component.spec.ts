import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeLanguageComponent } from './toggle-theme-language.component';

describe('ToggleThemeLanguageComponent', () => {
  let component: ToggleThemeLanguageComponent;
  let fixture: ComponentFixture<ToggleThemeLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleThemeLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleThemeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
