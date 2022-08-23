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
  public listItem: ListItemProps = { name: '', age: 0 }
  public list: ListItemProps[] = [
    { name: 'Pedrinho', age: 35 },
    { name: 'Luizinho', age: 36 },
    { name: 'Zezinho', age: 37 },
  ]
  public switchConditional: number = 1
  public date: Date = new Date(Date.now())

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)

    setInterval(() => {
      this.date = new Date(Date.now())
    }, 1000)
  }

  public switch() {
    this.conditionClick = !this.conditionClick
  }

  public addToList(listItem: ListItemProps) {
    this.list.push(listItem)
    this.listItem = { name: '', age: 0 }
  }

  public removefromList(item: number) {
    this.list.splice(item, 1)
  }
}
