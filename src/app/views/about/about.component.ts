import { Component, OnInit } from '@angular/core'
import locale from '../../locales/LocaleImports'
import appSettings from '../../../appSettings.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  readonly locale = locale
  readonly repo = appSettings.repo

  ngOnInit (): void {
  }
}
