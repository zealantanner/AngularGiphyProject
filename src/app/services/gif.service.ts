import { Injectable } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gif } from '../interfaces/gif';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios from 'axios'


@Injectable({
    providedIn: 'root'
})
export class GifService {
    giphyUrl = 'https://api.giphy.com/v1/gifs'
    #apiKey = 'KkQIVU7CgUTlND28O2bDZveA3Z8Vl1kz';

    limit = 50
    // offset = Math.floor(Math.random() * 500)
    offset = 0

    public favorites: string[] = []
    public resultsToRender: Gif[] = []
    public searchText: string = ''

    constructor(
        private snackbar: MatSnackBar,
        private http: HttpClient
    ) { }
    search(textToSearch: string, wantTrending: boolean = false) {
        console.log('searching for ' + textToSearch);
        this.searchText = (wantTrending) ? 'Trending' : textToSearch
        this.searchText = textToSearch
        const encodedText = encodeURI(textToSearch);
        axios.get(`${this.giphyUrl}/${wantTrending ? 'trending' : 'search'}`, {
            params: {
                api_key: this.#apiKey,
                offset: this.offset,
                limit: this.limit,
                q: encodedText,
            }
        }).then((response) => { // handle success
            const res = this.removeDuplicateGifs(response.data.data)
            this.resultsToRender = res
            return res
        }).catch((error) => { // handle error
            console.log(error)
        });
    }

    // searchMore(textToSearch?: string) {

    // }


    openSnackBar(text: string) {
        this.snackbar.open(text, 'dismiss', {
            duration: 3000,
        });
        // this.snackBar.openFromComponent(PizzaPartyComponent, {
        //     duration: this.durationInSeconds * 1000,
        // });


    }
    saveToFavorites(gifId: string) {
        let snackText;
        if(this.favorites.includes(gifId)) {
            snackText = 'Gif already saved in favorites'
        }
        else {
            this.favorites.push(gifId);
            snackText = 'Gif saved'
        }
        this.snackbar.open(snackText, 'dismiss', {
            duration: 3000
        });
    }

    removeDuplicateGifs(arr: Gif[]): Gif[] {
        const uniqueIds = new Set();
        return arr.filter(element => {
            const isDuplicate = uniqueIds.has(element.id);
            uniqueIds.add(element.id);
            return !isDuplicate
        });
    }
};