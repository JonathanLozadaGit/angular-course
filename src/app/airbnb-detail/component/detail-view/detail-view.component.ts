import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AirbnbApiService } from '../../services/airbnb-api.service';
import { Detail } from '../../models/detail-model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.sass']
})
export class DetailViewComponent implements OnInit {

  detail : Detail | undefined;

  constructor(
    private airbnApi : AirbnbApiService,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id!== null){
      this.airbnApi.getDetailById(id)
        .subscribe(data => this.detail = data)
    }
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('airbnb');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('airbnb');
  }

}
