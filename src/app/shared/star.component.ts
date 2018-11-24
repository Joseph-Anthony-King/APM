import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges{

    @Input() rating: number;
    @Input() productName: string;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        var displayTime = new Date().toLocaleTimeString();
        this.ratingClicked.emit(`The ${this.productName} rating of ${this.rating} was clicked at ${displayTime}!`);
    }
}