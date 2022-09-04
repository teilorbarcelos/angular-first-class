import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public foodList: { label: string; value: string }[] = [
    { label: 'Pizza', value: 'pizza' },
    { label: 'Hamburger', value: 'hamburger' },
    { label: 'Lazanha', value: 'lazanha' },
    { label: 'Coxinha', value: 'coxinha' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
