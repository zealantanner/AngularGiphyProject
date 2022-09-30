import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif';
import { GifService } from 'src/app/services/gif.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {
    searchText: string = this.gifService.searchText
    gifs: Gif[] = this.gifService.resultsToRender;

    constructor(
        private snackbar: MatSnackBar,
        private gifService: GifService,
    ) { }
    update() {
        this.gifs = this.gifService.resultsToRender
        console.log('favorites: ', this.gifService.favorites)
        this.gifService.openSnackBar('gifs loaded')
        // this.snackbar.open('Message archived', 'Undo', {
        //     duration: 3000
        // });
    }

    ngOnInit(): void {
        this.gifs = this.gifService.resultsToRender

    }
    saveToFavs(id: string) {
        // console.log(id)
        // console.log(this.gifService.favorites)
        this.gifService.saveToFavorites(id)

    }
}
