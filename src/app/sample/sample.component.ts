import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
