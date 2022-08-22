import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss'],
})
export class AttributesDirectivesComponent implements OnInit {
  constructor() {}

  public active: boolean = true

  ngOnInit(): void {
    setInterval(() => {
      this.active = !this.active
    }, 2000)
  }
}
