import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public sendData = new EventEmitter()
  public listOutput: { name: string; age: number }[] = [
    {
      name: 'Jaiminho',
      age: 66,
    },
    {
      name: 'Clotilde',
      age: 350,
    },
    {
      name: 'Madruga',
      age: 120,
    },
  ]
  constructor() {}

  public getData(event: number) {
    this.sendData.emit(this.listOutput[event])
  }

  ngOnInit(): void {}
}
