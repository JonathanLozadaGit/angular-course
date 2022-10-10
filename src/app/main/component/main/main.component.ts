import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  title : string = "Angular Course"
  subtitle : string = "Choose an app"

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('main');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('main');
  }

}
