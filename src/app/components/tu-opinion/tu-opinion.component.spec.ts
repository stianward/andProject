import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuOpinionComponent } from './tu-opinion.component';

describe('TuOpinionComponent', () => {
  let component: TuOpinionComponent;
  let fixture: ComponentFixture<TuOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
