import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <app-first-shared-component></app-first-shared-component>
    <app-structural-directives></app-structural-directives>
    <app-attributes-directives>
      <h1>Directives attributes lesson</h1>
      <h3>segundo ng content</h3>
    </app-attributes-directives>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
