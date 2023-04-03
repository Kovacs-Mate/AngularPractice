import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from '../../core/dto/List';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  @Input() currentList: Array<ListItem> = [];

  @Output() removeItem: EventEmitter<number | null> = new EventEmitter();

  deleteArticle(id: number | null): void {
    this.removeItem.emit(id);
  }
}
