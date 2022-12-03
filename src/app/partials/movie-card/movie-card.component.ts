import { Component, Input, OnInit } from '@angular/core'
import MovieResultObject from 'src/app/models/MovieResultObject'
import appSettings from '../../../appSettings.json'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieResultObject | null = null
  readonly imgroot = appSettings.imgroot

  slice (text: string, length: number): string {
    return text.length < length ? text : text.slice(0, length) + '…'
  }

  ngOnInit (): void {
  }
}
