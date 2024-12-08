import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly criteriaNames: string[] = [
    'Опенинг',
    'Эндинг',
    'Музыка',
    'Озвучка',
    'Саунд',
    'Рисовка',
    'Детализация',
    'Анимация',
    'Спецэффекты',
    'Сюжет',
    'Глубина',
    'Увлекательность',
    'Перевод',
    'Перевод',
  ];

  getCriteriaNames() {
    return this.criteriaNames;
  }
}
