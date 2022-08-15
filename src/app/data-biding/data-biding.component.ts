import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public name: string = 'Teilor'
  public age: number = 34
  public isDisabled: boolean = true

  constructor() {}

  ngOnInit(): void {}
}
