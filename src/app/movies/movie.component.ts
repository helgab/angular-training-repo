import { Component, Input } from "@angular/core";

@Component({
    selector: 'movie-component',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {
   
    @Input() title;
    @Input() year;
    @Input() duration;
    @Input() genre;
    @Input() plot;
    @Input() poster;
    @Input() comments;
    @Input() isLiked;
    @Input() isSaved;
    

    like(index) {
        // this.movies[index].isLiked = !this.movies[index].isLiked;
    }

    clear(index) {
        // this.movies[index].comments = "";
    }

    saveToggle(index) {
        // this.movies[index].isSaved = !this.movies[index].isSaved;
    }

    getWordsNumber(index){
        // if(this.movies[index].comments.length != 0) {
        //     return this.movies[index].comments.split(" ").length;
        // }
        // else return 0;
        return 111;
    }


}