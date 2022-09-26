import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif';
import { GifService } from 'src/app/services/gif.service';
import { NgxMasonryOptions } from 'ngx-masonry';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {
    gifs: Gif[] = [];

    constructor(
        private snackbar: MatSnackBar,
        private gifService: GifService,
    ) { }
    update() {
        this.gifs = this.gifService.resultsToRender
        console.log('favorites: ', this.gifService.favorites)
    }

    ngOnInit(): void {
        // this.snackbar.open('Message archived', 'Undo', {
        //     duration: 3000
        // });

        // this.gifs = this.gifService.search.subscribe()
    }
    saveToFavs(id: string) {
        // console.log(id)
        // console.log(this.gifService.favorites)
        this.gifService.saveToFavorites(id)

    }
}
