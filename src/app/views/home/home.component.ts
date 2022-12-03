import { Component, OnInit } from '@angular/core'
import MovieListCategory from 'src/app/models/MovieListCategory'
import Movies, { MovieQueryResult } from 'src/app/models/Movies'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  #category = MovieListCategory.Popular
  #page = 1
  result: MovieQueryResult | null = null
  pending = false
  readonly MovieListCategory = MovieListCategory
  readonly locale = locale

  get category (): MovieListCategory {
    return this.#category
  }

  set category (category: MovieListCategory) {
    this.#category = category
    this.page = 1
    void this.update()
  }

  setCategory (category: MovieListCategory): void {
    this.category = category
  }

  get page (): number {
    return this.#page
  }

  set page (page: number) {
    this.result = null
    this.#page = page
    void this.update()
  }

  pageChange = (page: number): void => { this.page = page }

  ngOnInit (): void {
    void this.update()
  }

  update (): Promise<void> | void {
    if (this.result == null && !this.pending) {
      this.pending = true
      return Movies.list(this.category, this.page).then((result: MovieQueryResult | null) => {
        this.result = result
        this.pending = false
      })
    }
  }
}
