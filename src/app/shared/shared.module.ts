import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstSharedComponentComponent } from './first-shared-component/first-shared-component.component'
import { InputComponent } from './input/input.component'
import { OutputComponent } from './output/output.component'
import { FoodListComponent } from './food-list/food-list.component'

@NgModule({
  declarations: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
  ],
  imports: [CommonModule],
  exports: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
  ],
})
export class SharedModule {}
