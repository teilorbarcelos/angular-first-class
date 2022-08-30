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
    <hr />
    <h3>Input (props):</h3>
    <app-input [value]="inputValue"></app-input>
    <br />
    <button (click)="addToCounter()">Add more</button>
    <hr />
    <h3>Output data:</h3>
    <ng-template [ngIf]="getData">
      <h3>{{ getData.name }}</h3>
      <h3>{{ getData.age }}</h3>
    </ng-template>
    <app-output (sendData)="setData($event)"></app-output>
    <hr />
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public inputValue: number = 0
  public getData: { name: string; age: number } | undefined

  constructor() {}

  public addToCounter() {
    this.inputValue += 1
  }

  public setData(event: { name: string; age: number }) {
    this.getData = event
  }

  ngOnInit(): void {}
}
