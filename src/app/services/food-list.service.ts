import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter()

  // private list: string[] = ['carne', 'arroz', 'feijão', 'ovo']
  private list: string[] = []

  constructor() {}

  public foodList() {
    return this.list
  }

  public addFoodToList(foodName: string) {
    this.foodListAlert(foodName)
    return this.list.push(foodName)
  }

  public foodListAlert(message: string) {
    return this.emitEvent.emit(message)
  }
}
