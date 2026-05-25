import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDestacadasComponent } from './series-destacadas.component';

describe('SeriesDestacadasComponent', () => {
  let component: SeriesDestacadasComponent;
  let fixture: ComponentFixture<SeriesDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesDestacadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
