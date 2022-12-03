import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import MovieDetailResultObject from 'src/app/models/MovieDetailResultObject'
import locale from '../../locales/LocaleImports'
import appSettings from '../../../appSettings.json'
import { ActivatedRoute } from '@angular/router'
import Movies from '../../models/Movies'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  readonly locale = locale
  readonly imgroot = appSettings.imgroot
  movie: MovieDetailResultObject | null = null

  constructor (
    private readonly location: Location,
    private readonly route: ActivatedRoute
  ) { }

  back (): void {
    this.location.back()
  }

  ngOnInit (): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        void Movies.detail(params.get('id') as string).then(movie => {
          this.movie = movie
        })
      }
    })
  }
}
