import { Component, OnInit } from '@angular/core'
import Movies, { MovieQueryResult } from '../../models/Movies'
import locale from '../../locales/LocaleImports'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  #page = 1
  result: MovieQueryResult | null = null
  pending = false
  query = ''
  readonly locale = locale
  readonly decodeURIComponent = window.decodeURIComponent

  constructor (
    private readonly route: ActivatedRoute
  ) { }

  get page (): number {
    return this.#page
  }

  set page (page: number) {
    this.result = null
    this.#page = page
    void this.update()
  }

  pageChange = (page: number): void => { this.page = page }

  update (): void {
    this.pending = true
    void Movies.search(this.query, this.page).then(result => {
      this.result = result
      this.pending = false
    })
  }

  ngOnInit (): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('query')) {
        this.query = params.get('query') as string
        void this.update()
      }
    })
  }
}
