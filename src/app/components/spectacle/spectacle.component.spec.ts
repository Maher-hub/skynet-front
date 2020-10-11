import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectacleComponent } from './spectacle.component';

describe('SpectacleComponent', () => {
  let component: SpectacleComponent;
  let fixture: ComponentFixture<SpectacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
