import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Components
import { FirstSharedComponentComponent } from './first-shared-component/first-shared-component.component'
import { InputComponent } from './input/input.component'
import { OutputComponent } from './output/output.component'
import { FoodListComponent } from './food-list/food-list.component'
import { AddFoodComponent } from './add-food/add-food.component'

@NgModule({
  declarations: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    AddFoodComponent,
  ],
  imports: [CommonModule],
  exports: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    AddFoodComponent,
  ],
})
export class SharedModule {}
