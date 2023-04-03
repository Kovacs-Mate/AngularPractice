import { Component, EventEmitter, Output } from '@angular/core';
import { ListItem } from '../../core/dto/List';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css'],
})
export class AddToListComponent {
  listArticle: ListItem = {
    id: null,
    item: null,
    unitCount: null,
    unit: null,
  };

  id: number = 0;

  options: Array<string> = ['darab', 'kilógramm', 'liter'];

  @Output() listUpdate: EventEmitter<ListItem> = new EventEmitter();

  addToList(): void {
    this.id++;

    this.listUpdate.emit({ ...this.listArticle, id: this.id });
    this.clear();
  }

  clear(): void {
    this.listArticle = {
      id: null,
      item: null,
      unitCount: null,
      unit: null,
    };
  }
}
