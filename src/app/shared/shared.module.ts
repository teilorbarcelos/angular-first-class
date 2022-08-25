import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstSharedComponentComponent } from './first-shared-component/first-shared-component.component'
import { InputComponent } from './input/input.component'

@NgModule({
  declarations: [FirstSharedComponentComponent, InputComponent],
  imports: [CommonModule],
  exports: [FirstSharedComponentComponent, InputComponent],
})
export class SharedModule {}
