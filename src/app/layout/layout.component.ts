import { Component, OnInit } from '@angular/core'
import appSettings from '../../appSettings.json'
import locale from '../locales/LocaleImports'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  readonly icp = appSettings.icp
  readonly locale = locale

  ngOnInit (): void {
  }
}
