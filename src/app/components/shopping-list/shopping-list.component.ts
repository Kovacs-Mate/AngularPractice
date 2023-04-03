import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  list = [
    {
      id: 1,
      item: 'Alma',
      unitCount: 3,
      unit: 'kilógramm',
    },
  ];
}
