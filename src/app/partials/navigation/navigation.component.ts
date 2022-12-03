import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import locale from '../../locales/LocaleImports'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor (private readonly router: Router) { }

  readonly locale = locale
  searchInputText = ''

  async searchFormSubmit (): Promise<void> {
    if (this.searchInputText !== '') {
      await this.router.navigate(['/search', window.encodeURIComponent(this.searchInputText)])
      this.searchInputText = ''
    }
  }

  ngOnInit (): void {
  }
}
