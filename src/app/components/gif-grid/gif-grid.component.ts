import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif';
import { GifService } from 'src/app/services/gif.service';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {
    gifs?: Gif[] = [];

    constructor(
        private gifService: GifService,
    ) { }
    activate() {

        console.log(this.gifs)
        // this.gifs = this.gifService.gifObservable
    }

    ngOnInit(): void {
        // this.gifService.search().subscribe(results => this.gifs = results)
        // this.gifs = this.gifService.search.subscribe()
        console.log('gifs from gif comp', this.gifs)

    }
}
