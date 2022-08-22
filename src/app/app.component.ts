import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-structural-directives></app-structural-directives> -->
    <app-attributes-directives></app-attributes-directives>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
