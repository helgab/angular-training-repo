import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movielist.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [MovieListComponent, MovieComponent],
    imports: [BrowserModule, FormsModule],
    exports: [MovieListComponent],
    providers: []
})
export class MoviesModule {}