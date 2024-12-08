import { Component, inject } from '@angular/core';
import { SelectComponent } from './select/select.component';
import { ICriteria } from '../interfaces/criteria.interface';
import { DataService } from './services/data.service';
import { ButtonComponent } from './button/button.component';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private criteriaValues: Record<string, string> = {};
  private dataService = inject(DataService);
  private calculatorService = inject(CalculatorService);

  criteriaNames: string[] = [];
  rating: number = 0;

  constructor() {
    this.criteriaNames = this.dataService.getCriteriaNames();
  }

  addItem(item: ICriteria) {
    this.criteriaValues[item.criteriaName] = item.criteriaRating;
  }

  getRating() {
    this.rating = this.calculatorService.calculate(this.criteriaValues);
  }
}
