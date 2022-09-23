import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif';
import { GifService } from 'src/app/services/gif.service';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {
    gifs: Gif[] = [];

    constructor(
        private gifService: GifService,
    ) { }
    activate() {
        // this.gifService.search().subscribe(results => this.gifs = results)
        console.log(this.gifs)
        // console.log(this.gifs.data)
    }

    ngOnInit(): void {
        this.gifService.search('',true).subscribe((results: any) => this.gifs = results.data)
        // this.gifs = this.gifService.search.subscribe()
    }
}
