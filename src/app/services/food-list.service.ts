import { HttpClient } from '@angular/common/http'
import { EventEmitter, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FoodListItem } from '../module/food-list-item'

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private api: string = 'http://localhost:3000/'
  public emitEvent = new EventEmitter()

  // private list: string[] = ['carne', 'arroz', 'feijão', 'ovo']
  private list: FoodListItem[] = []

  constructor(private http: HttpClient) {}

  public foodList(): Observable<FoodListItem[]> {
    return this.http.get<FoodListItem[]>(`${this.api}food-list`).pipe(
      (response) => response,
      (error) => error,
    )
  }

  public addFoodToList(foodName: string): Observable<FoodListItem> {
    return this.http
      .post<FoodListItem>(`${this.api}food-list`, {
        name: foodName,
      })
      .pipe(
        (response) => response,
        (error) => error,
      )
  }

  public foodListUpdate(food: FoodListItem): Observable<FoodListItem> {
    return this.http
      .put<FoodListItem>(`${this.api}food-list/${food.id}`, {
        name: food.name,
      })
      .pipe(
        (response) => response,
        (error) => error,
      )
  }

  public foodListDelete(food: number): Observable<FoodListItem> {
    return this.http.delete<FoodListItem>(`${this.api}food-list/${food}`).pipe(
      (response) => response,
      (error) => error,
    )
  }

  public foodListAlert(foodItem: FoodListItem) {
    return this.emitEvent.emit(foodItem)
  }
}
