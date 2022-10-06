import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-course';
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "linkedin-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/linkedin-icon.svg")
    ),
    this.matIconRegistry.addSvgIcon(
      "github-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/github-icon.svg")
    );
  }
}
