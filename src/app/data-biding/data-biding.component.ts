import { Component, OnInit } from '@angular/core'

interface CursorPositionProps {
  x: number
  y: number
}

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public name: string = 'Teilor'
  public age: number = 34
  public isDisabled: boolean = true
  public cursorPosition: CursorPositionProps = { x: 0, y: 0 }

  constructor() {}

  ngOnInit(): void {}

  public alertInfo(message: string) {
    alert(`Mensagem: ${message}`)
  }

  public eventInfo(event: MouseEvent) {}

  public mouseMoveAction(event: MouseEvent) {
    this.cursorPosition.x = event.offsetX
    this.cursorPosition.y = event.offsetY
  }
}
