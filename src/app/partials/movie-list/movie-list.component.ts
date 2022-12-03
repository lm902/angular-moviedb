import { Component, Input, OnInit } from '@angular/core'
import MovieResultObject from 'src/app/models/MovieResultObject'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieResultObject[] = []

  ngOnInit (): void {
  }
}
