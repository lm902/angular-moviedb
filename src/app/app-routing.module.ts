import { APP_BASE_HREF } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './views/about/about.component'
import { DetailComponent } from './views/detail/detail.component'
import { DiscoverComponent } from './views/discover/discover.component'
import { FavoritesComponent } from './views/favorites/favorites.component'
import { HomeComponent } from './views/home/home.component'
import { RatedComponent } from './views/rated/rated.component'
import { SearchComponent } from './views/search/search.component'

const routes: Routes = [
  { pathMatch: 'full', path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'rated', component: RatedComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' }
  ]
})
export class AppRoutingModule { }
