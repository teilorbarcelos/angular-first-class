import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TitleComponent } from './title/title.component'
import { DataBidingComponent } from './data-biding/data-biding.component'
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component'
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component'
import { SharedModule } from './shared/shared.module'
import { FormsComponent } from './forms/forms.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    StructuralDirectivesComponent,
    AttributesDirectivesComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
