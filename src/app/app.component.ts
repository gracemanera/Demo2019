import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'This is What I Want';
  tooltip = 'This is a tooltip.';
  inputVar = '';

  changeTitle(){
    this.appTitle='I changed the title';
    this.inputVar= 'I changed babyyy';
  }

  showAlert(){
    alert(this.inputVar);
  }
}
