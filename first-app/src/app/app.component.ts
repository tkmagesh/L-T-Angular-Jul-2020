import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  changeTitle(){
    this.title = 'My New App';
  }
  constructor(){
    /* setTimeout(() => {
      this.changeTitle();
    }, 10000); */
  }
}
