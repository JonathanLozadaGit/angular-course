import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/airbnb-detail/models/detail-model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent implements OnInit {

  @Input() detail: Detail | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
