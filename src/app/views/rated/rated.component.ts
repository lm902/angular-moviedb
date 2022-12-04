import { Component, OnInit } from '@angular/core'
import { liked, disliked } from '../../models/UserCustomization'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.css']
})
export class RatedComponent implements OnInit {
  readonly locale = locale
  readonly liked = liked
  readonly disliked = disliked

  ngOnInit (): void {
  }
}
