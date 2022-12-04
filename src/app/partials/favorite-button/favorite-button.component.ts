import { Component, Input, OnInit } from '@angular/core'
import MovieDetailResultObject from 'src/app/models/MovieDetailResultObject'
import { favorites } from '../../models/UserCustomization'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movie: MovieDetailResultObject | null = null
  readonly locale = locale

  get favorited (): boolean {
    if (this.movie == null) return false
    return favorites.has(this.movie)
  }

  click (): void {
    if (this.movie == null) return
    this.favorited
      ? favorites.remove(this.movie)
      : favorites.add(this.movie)
  }

  ngOnInit (): void {
  }
}
