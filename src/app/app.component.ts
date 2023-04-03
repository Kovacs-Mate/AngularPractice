import { Component } from '@angular/core';
import { ListItem } from './core/dto/List';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping_list';

  list: Array<ListItem> = [];

  addToList(article: ListItem): void {
    this.list.push(article);
    console.log(this.list);
  }

  deleteFromList(id: number | null): void {
    this.list = this.list.filter((item) => item.id != id);
  }
}
