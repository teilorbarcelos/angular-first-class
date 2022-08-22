import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TitleComponent } from './title/title.component'
import { DataBidingComponent } from './data-biding/data-biding.component'
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component'

@NgModule({
  declarations: [AppComponent, TitleComponent, DataBidingComponent, StructuralDirectivesComponent, AttributesDirectivesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
