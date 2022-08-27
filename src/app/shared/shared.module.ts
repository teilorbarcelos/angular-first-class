import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstSharedComponentComponent } from './first-shared-component/first-shared-component.component'
import { InputComponent } from './input/input.component'
import { OutputComponent } from './output/output.component'

@NgModule({
  declarations: [
    FirstSharedComponentComponent,
    InputComponent,
    OutputComponent,
  ],
  imports: [CommonModule],
  exports: [FirstSharedComponentComponent, InputComponent, OutputComponent],
})
export class SharedModule {}
