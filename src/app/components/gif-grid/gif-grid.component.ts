import { Component, OnInit, OnChanges } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif';
import { GifService } from 'src/app/services/gif.service';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit, OnChanges {
    gifs:any;

    constructor(
        private gifService: GifService,
    ) { }


    ngOnInit(): void {
        // this.gifs = this.gifService.search.subscribe()
        console.log('gifs frpm gif comp', this.gifs)

    }

    ngOnChanges(): void {
        this.gifs = GifService.gifObservable
        console.log('gifs frpm gif comp', this.gifs)

    }
}
