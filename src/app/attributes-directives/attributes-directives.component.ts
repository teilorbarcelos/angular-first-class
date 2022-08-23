import { Component, OnInit } from '@angular/core'

interface ListItemProps {
  name: string
  age: number
}

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss'],
})
export class AttributesDirectivesComponent implements OnInit {
  public active: boolean = true
  public width: string = '200px'
  public background: string = 'blue'
  public show: boolean = true
  public list: ListItemProps[] = [
    { name: 'Pedrinho', age: 35 },
    { name: 'Luizinho', age: 36 },
    { name: 'Zezinho', age: 37 },
  ]

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.active = !this.active
      this.show = !this.show

      if (this.width === '200px') {
        this.width = '100px'
        this.background = 'red'
      } else {
        this.width = '200px'
        this.background = 'blue'
      }
    }, 2000)
  }
}
