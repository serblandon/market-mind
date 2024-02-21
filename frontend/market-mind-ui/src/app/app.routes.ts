import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'watchlist', component: WatchlistComponent },
    { path: '**', component: HomePageComponent }
];
