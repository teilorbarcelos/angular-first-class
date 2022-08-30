import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: string[] = ['carne', 'arroz', 'feijão', 'ovo']

  constructor() {}

  public foodList() {
    return this.list
  }

  public addFoodToList(foodName: string) {
    return this.list.push(foodName)
  }
}
