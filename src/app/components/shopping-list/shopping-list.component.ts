import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LIST } from '../add-to-list/List';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  list: Array<LIST> = [
    {
      id: 1,
      item: 'Alma',
      unitCount: 15,
      unit: 'kilógramm',
    },
  ];
}
