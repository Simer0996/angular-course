import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  // h3 {
  //   color:black;
  // }
  // `]
})
export class AppComponent {
  title = ' App testing';
  name: any;
}
