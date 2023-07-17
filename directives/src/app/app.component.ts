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

  viewMode = 'map';

  setViewMode(mode: string){
    this.viewMode = mode;
  }
  courses = [{id:1,name:"course1"},{id:2,name:"course2"},{id:3,name:"course3"}]

  AddNewCourse(){
    this.courses.push({id:4,name:"course4"})
  }

  onRemove(course: { id: number; name: string; }){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
}
