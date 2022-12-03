import { Component, Input, OnInit } from '@angular/core'
import MovieDetailResultObject from 'src/app/models/MovieDetailResultObject'

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movie: MovieDetailResultObject | null = null

  ngOnInit (): void {
  }
}
