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
      next: (response: string) => alert(`Você adicionou => ${response} `),
      error: (error: any) => console.log(error),
    })
  }
}
