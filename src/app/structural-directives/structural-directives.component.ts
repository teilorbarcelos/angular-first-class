import { Component, OnInit } from '@angular/core'

interface ListItemProps {
  name: string
  age: number
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  public condition: boolean = true
  public conditionClick: boolean = true
  public list: ListItemProps[] = [
    { name: 'Pedrinho', age: 35 },
    { name: 'Luizinho', age: 36 },
    { name: 'Zezinho', age: 37 },
  ]

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public switch() {
    this.conditionClick = !this.conditionClick
  }

  public addToList() {
    this.list.push({ name: 'Tio Patinhas', age: 78 })
  }

  public removefromList(item: number) {
    this.list.splice(item, 1)
  }
}
