import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  title : string = "Angular Course"
  subtitle : string = "Choose an app"

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('main');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('main');
  }

}
