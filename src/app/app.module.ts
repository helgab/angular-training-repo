import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoviesModule } from './movies/movies.module'


import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie.component';
import { MovieListComponent } from './movies/movielist.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
