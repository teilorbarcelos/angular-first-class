import { Component, OnInit } from '@angular/core'
import { FoodListService } from 'src/app/services/food-list.service'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {}

  public addListItem(food: string) {
    return this.foodListService.addFoodToList(food).subscribe({
      next: (response) => this.foodListService.foodListAlert(response),
      error: (error) => error,
    })
  }
}
