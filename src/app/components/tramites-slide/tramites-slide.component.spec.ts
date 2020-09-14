import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesSlideComponent } from './tramites-slide.component';

describe('TramitesSlideComponent', () => {
  let component: TramitesSlideComponent;
  let fixture: ComponentFixture<TramitesSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramitesSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
