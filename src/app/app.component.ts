import { Component } from '@angular/core';
import { LIST } from './components/add-to-list/List';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping_list';

  list: Array<Object> = [];

  addToList($event: Object, list: Array<Object>): void {
    list.push($event);
    console.log(list);
  }
}
