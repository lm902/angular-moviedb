import { Component, OnInit } from '@angular/core'
import { favorites } from '../../models/UserCustomization'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  readonly locale = locale
  readonly favorites = favorites

  ngOnInit (): void {
  }
}
