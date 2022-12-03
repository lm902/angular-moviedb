import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { FavoriteButtonComponent } from './partials/favorite-button/favorite-button.component'
import { MovieCardComponent } from './partials/movie-card/movie-card.component'
import { MovieListComponent } from './partials/movie-list/movie-list.component'
import { NavigationComponent } from './partials/navigation/navigation.component'
import { PageControlComponent } from './partials/page-control/page-control.component'
import { RateButtonComponent } from './partials/rate-button/rate-button.component'
import { AboutComponent } from './views/about/about.component'
import { DetailComponent } from './views/detail/detail.component'
import { DiscoverComponent } from './views/discover/discover.component'
import { FavoritesComponent } from './views/favorites/favorites.component'
import { HomeComponent } from './views/home/home.component'
import { RatedComponent } from './views/rated/rated.component'
import { SearchComponent } from './views/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FavoriteButtonComponent,
    MovieCardComponent,
    MovieListComponent,
    NavigationComponent,
    PageControlComponent,
    RateButtonComponent,
    AboutComponent,
    DetailComponent,
    DiscoverComponent,
    FavoritesComponent,
    HomeComponent,
    RatedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
