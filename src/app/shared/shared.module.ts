import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

// Components
import { FirstSharedComponentComponent } from './first-shared-component/first-shared-component.component'
import { InputComponent } from './input/input.component'
import { OutputComponent } from './output/output.component'
import { FoodListComponent } from './food-list/food-list.component'
import { AddFoodComponent } from './add-food/add-food.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    AddFoodComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    AddFoodComponent,
  ],
})
export class SharedModule {}
