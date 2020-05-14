import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-downgradable',
  templateUrl: './downgradable.component.html',
  styleUrls: ['./downgradable.component.css'],
})
export class DowngradableComponent {
  title = 'Downgraded Component';

  @Input() date: Date;

  /*  when using them from AngularJS templates, you must use kebab-case
      Ex: date-selected
   */
  @Output() dateSelected = new EventEmitter<Date>();

  onDateChanges(d: Date) {
    this.dateSelected.emit(d);
  }
}
