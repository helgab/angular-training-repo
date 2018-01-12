import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MovieComponent } from './movie.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [MovieComponent],
    imports: [BrowserModule, FormsModule],
    exports: [MovieComponent],
    providers: []
})
export class MoviesModule {}