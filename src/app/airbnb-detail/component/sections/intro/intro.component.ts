import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/airbnb-detail/models/detail-model';
import { FormBuilder, Validators} from '@angular/forms';
import {differenceInDays} from 'date-fns';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {

  @Input() detail: Detail | undefined;

  hasResult : boolean = false;
  daysBetween : number = 0;
  priceDays : number = 0;
  priceGuests : number = 0;
  priceTotal : number = 0;
  priceDayDef : number = 0;
  priceDay : number = 0;
  extraGuest : number = 0;

  cleaningFee : number = 0;
  securityDep : number = 0;

  airbnForm = this.fb.group({
    startF : ['', {
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    endF : ['', {
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    guestsF : ['', {
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.priceDayDef = this.detail?.price?.$numberDecimal ? parseInt(this.detail.price.$numberDecimal) : 0;
    this.extraGuest = this.detail?.extra_people?.$numberDecimal ? parseInt(this.detail.extra_people.$numberDecimal) : 0;
    this.cleaningFee = this.detail?.cleaning_fee?.$numberDecimal ? parseInt(this.detail.cleaning_fee.$numberDecimal) : 0;
    this.securityDep = this.detail?.security_deposit?.$numberDecimal ? parseInt(this.detail.security_deposit.$numberDecimal) : 0;
    this.priceDay = this.priceDayDef;

    this.airbnForm.valueChanges.subscribe(x => {
      this.onSubmit();
  })
  }

  
  calculateValues(){
    let guests = this.airbnForm.get('guestsF')?.value?.toString();
    let start  = this.airbnForm.get('startF')?.value?.toString();
    let end = this.airbnForm.get('endF')?.value?.toString();
    if (guests) {
      console.log('2');
      let guestNum = parseInt(guests);
      this.priceDay =  guestNum > 1 ? this.priceDayDef + this.extraGuest * (guestNum - 1) : this.priceDayDef;
    }
    if(start && end && guests) {
      let startDate = new Date (start);
      let endDate = new Date(end);
      

      this.daysBetween = differenceInDays(endDate, startDate);
      this.priceDays = this.daysBetween > 0 ? this.priceDay  * this.daysBetween : 0;
      this.priceTotal = this.priceDays + this.cleaningFee + this.securityDep;
    }
  }


  onSubmit() {
    this.calculateValues();
    this.hasResult = false;
    if(this.airbnForm.valid && this.priceDays !== 0) {    
      this.hasResult = true;
    }
  }


}
