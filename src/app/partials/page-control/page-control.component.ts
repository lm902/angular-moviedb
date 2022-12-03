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

  get pages (): number[] {
    const items = []
    for (let p = this.current - 2 > 0 ? this.current - 2 : 1; p <= (this.current + 2 < this.max ? this.current + 2 : this.max); p++) {
      items.push(p)
    }
    return items
  }

  ngOnInit (): void {
  }
}
