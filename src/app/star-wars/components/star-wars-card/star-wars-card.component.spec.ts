import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsCardComponent } from './star-wars-card.component';

describe('StarWarsCardComponent', () => {
  let component: StarWarsCardComponent;
  let fixture: ComponentFixture<StarWarsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
