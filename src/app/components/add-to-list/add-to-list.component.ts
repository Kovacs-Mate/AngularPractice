import { Component, EventEmitter, Output } from '@angular/core';
import { LIST } from './List';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css'],
})
export class AddToListComponent {
  toList: LIST = {
    item: '',
    unitCount: NaN,
    unit: '',
  };

  @Output() onSubmit = new EventEmitter<any>();

  addToList(toList: any) {
    this.onSubmit.emit(toList);
    console.log(
      'elküldtem ' + this.toList.item + this.toList.unit + this.toList.unitCount
    );
  }
}
