import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'rating-component',
    templateUrl: './rating.component.html'
})
export class RatingComponent{
    public ratings = [false, false, false, false, false];
    @Input() rating;
    @Output() ratingChange = new EventEmitter();

    updateRating(index) {
        console.log(index);
        for (let i=0; i <= index; i++){
            this.ratings[i] = true;
        }
        for (let i=index+1; i < this.ratings.length; i++) {
            this.ratings[i] = false;
        }
    }

    ngOnOnit() {
        this.updateRating(this.rating);
    }

    ngOnChanges(changes) {
        this.updateRating(changes.rating.currentValue);
    }

    handleRatingChange(index) {
        this.ratingChange.emit(index)
    }
}