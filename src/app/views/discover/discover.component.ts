import { Component, OnInit } from '@angular/core'
import Movies, { Genre, MovieQueryResult } from '../../models/Movies'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  readonly locale = locale
  yearInputText = ''
  selectedGenreIds: number[] = []
  #page = 1
  result: MovieQueryResult | null = null
  pending = false
  genres: Genre[] = []

  get page (): number {
    return this.#page
  }

  set page (value: number) {
    this.result = null
    this.#page = value
    void this.update()
  }

  genreCheckboxChange (event: Event, genre: Genre): void {
    const checkbox = event.target as HTMLInputElement
    if (checkbox.checked) {
      this.selectedGenreIds.push(genre.id)
    } else {
      this.selectedGenreIds.splice(this.selectedGenreIds.indexOf(genre.id), 1)
    }
    this.page = 1
  }

  pageChange = (page: number): void => { this.page = page }

  ngOnInit (): void {
    void Movies.genres.then((data) => {
      this.genres = data.genres
      void this.update()
    })
  }

  update (): Promise<void> | void {
    if (this.result == null && !this.pending) {
      this.pending = true
      return Movies.discover(Number(this.yearInputText), this.selectedGenreIds, this.page).then((result: MovieQueryResult | null) => {
        this.result = result
        this.pending = false
      })
    }
  }
}
