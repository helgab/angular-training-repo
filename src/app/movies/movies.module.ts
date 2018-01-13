import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movielist.component';
import { RatingComponent } from './rating.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [MovieListComponent, MovieComponent, RatingComponent],
    imports: [BrowserModule, FormsModule],
    exports: [MovieListComponent, RatingComponent],
    providers: []
})
export class MoviesModule {}