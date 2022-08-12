import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Hello Angular component!'

  constructor() {}

  ngOnInit(): void {
    console.log('app-title iniciado')
  }

  ngOnChanges(): void {
    console.log('título alterado')
  }

  ngOnDestroy(): void {
    console.log('app-title destruido')
  }
}
