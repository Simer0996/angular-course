import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  show = false;
  disable = false;

  showContent(){
    this.show = !this.show;
  }

  disableButton(){
    this.disable = !this.disable;
  }
}
