import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <app-structural-directives></app-structural-directives>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
