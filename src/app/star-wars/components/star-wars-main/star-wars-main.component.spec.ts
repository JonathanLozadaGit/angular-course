import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsMainComponent } from './star-wars-main.component';

describe('StarWarsMainComponent', () => {
  let component: StarWarsMainComponent;
  let fixture: ComponentFixture<StarWarsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
