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
    <app-input [value]="inputValue"></app-input>
    <br />
    <button (click)="addToCounter()">Add more</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public inputValue: number = 0

  constructor() {}

  public addToCounter() {
    this.inputValue += 1
  }

  ngOnInit(): void {}
}
