import { Component, Input, OnInit } from '@angular/core'
import MovieDetailResultObject from 'src/app/models/MovieDetailResultObject'

@Component({
  selector: 'app-rate-button',
  templateUrl: './rate-button.component.html',
  styleUrls: ['./rate-button.component.css']
})
export class RateButtonComponent implements OnInit {
  @Input() movie: MovieDetailResultObject | null = null

  ngOnInit (): void {
  }
}
