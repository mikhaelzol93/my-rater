import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  calculate(criteriaValues: Record<string, string>): number {
    const values = Object.values(criteriaValues)
      .filter((value) => value !== 'Не Применимо')
      .map((value) => Number(value));

    if (values.length === 0) {
      return 0;
    }

    return Math.ceil(values.reduce((x, y) => x + y) / values.length);
  }
}
