import { Component, Input } from '@angular/core';
import { Detail } from 'src/app/airbnb-detail/models/detail-model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent {

  @Input() detail: Detail | undefined;

}
