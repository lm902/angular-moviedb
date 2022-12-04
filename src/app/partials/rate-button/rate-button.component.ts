import { Component, Input, OnInit } from '@angular/core'
import MovieDetailResultObject from 'src/app/models/MovieDetailResultObject'
import { liked, disliked } from '../../models/UserCustomization'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-rate-button',
  templateUrl: './rate-button.component.html',
  styleUrls: ['./rate-button.component.css']
})
export class RateButtonComponent implements OnInit {
  @Input() movie: MovieDetailResultObject | null = null
  readonly locale = locale

  get liked (): boolean {
    if (this.movie == null) return false
    return liked.has(this.movie)
  }

  get disliked (): boolean {
    if (this.movie == null) return false
    return disliked.has(this.movie)
  }

  click (btn: 'liked' | 'disliked'): void {
    if (this.movie == null) return
    switch (btn) {
      case 'liked':
        this.liked
          ? liked.remove(this.movie)
          : liked.add(this.movie)
        break
      case 'disliked':
        this.disliked
          ? disliked.remove(this.movie)
          : disliked.add(this.movie)
        break
    }
  }

  ngOnInit (): void {
  }
}
