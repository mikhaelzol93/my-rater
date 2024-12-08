import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICriteria } from '../../interfaces/criteria.interface';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() criteriaName!: string;
  @Output() criteriaObject = new EventEmitter<ICriteria>();

  onChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    this.criteriaObject.emit({ criteriaName: this.criteriaName, criteriaRating: element.value });
  }
}
