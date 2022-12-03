import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
  styleUrls: ['./page-control.component.css']
})
export class PageControlComponent implements OnInit {
  @Input() current = 1
  @Input() max = 1
  @Input() onChange = (page: number): void => { }

  ngOnInit (): void {
  }
}
