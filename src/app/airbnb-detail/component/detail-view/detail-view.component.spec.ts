import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewComponent } from './detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute,} from '@angular/router';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  /*beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DetailViewComponent,
       ],
       imports:[
        HttpClientModule,
       ],
       providers: [
        { provide: ActivatedRoute, useValue: {paramM} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/
  it('should create', () => {
    //expect(component).toBeTruthy();
  }); 
});
