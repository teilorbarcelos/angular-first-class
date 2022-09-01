import { Component, OnInit } from '@angular/core'
import { FoodListItem } from 'src/app/module/food-list-item'
import { FoodListService } from 'src/app/services/food-list.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: FoodListItem[] = []
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (response) => (this.foodList = response),
      error: (error) => console.log(error),
    })

    this.foodListService.emitEvent.subscribe({
      next: (response: FoodListItem) => {
        alert(`Você adicionou => ${response.name}`)
        return this.foodList.push(response)
      },
      error: (error: any) => console.log(error),
    })
  }

  public foodListDelete = (food: number) =>
    this.foodListService.foodListDelete(food).subscribe({
      next: (response) => {
        this.foodList = this.foodList.filter((item) => item.id !== food)
      },
      error: (error) => console.log(error),
    })

  public foodListUpdate = (food: FoodListItem) =>
    this.foodListService.foodListUpdate(food).subscribe({
      next: (response) => {
        this.foodList = this.foodList.map((item) =>
          item.id === food.id ? response : item,
        )
      },
      error: (error) => console.log(error),
    })
}
