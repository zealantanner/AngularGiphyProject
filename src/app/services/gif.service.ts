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
    offset = Math.floor(Math.random() * 500)
    // offset = 0
    public favorites: string[] = []
    public resultsToRender: Gif[] = []

    constructor(
        private snackbar: MatSnackBar,
        private http: HttpClient
    ) { }
    search(textToSearch?: string, wantTrending: boolean = false) {
        const encodedText = textToSearch ? encodeURI(textToSearch) : undefined;
        axios.get(`${this.giphyUrl}/${wantTrending ? 'trending' : 'search'}`, {
            params: {
                api_key: this.#apiKey,
                offset: this.offset,
                limit: this.limit,
                q: encodedText,
            }
        })
        .then((response) => { // handle success
            const res = response.data.data
            this.resultsToRender = res
            console.log(res)
            return res
        })
            .catch((error) => { // handle error
                console.log(error)
            });
    }
    searchMore(textToSearch?: string) {

    }
    // search(textToSearch?: string, wantTrending:boolean=false): Observable<Gif[]> {
    //     const encodedText = textToSearch ? encodeURI(textToSearch) : undefined;
    //     if(this.gifResults) {
    //         return of(this.gifResults);
    //     }
    //     return this.http.get<any>(`https://api.giphy.com/v1/gifs/${wantTrending?'trending':'search'}?api_key=${this.#apiKey}&offset=${this.offset}&limit=${this.limit}&q=${encodedText}`)
    //         .pipe(
    //             tap(res => this.gifResults = res),
    //             //     tap(res => console.log(res),
    //             //     )
    //         );
    // }
    saveToFavorites(gifId: string) {
        this.favorites.push(gifId);
        this.snackbar.open('Gif saved', 'Undo', {
            duration: 3000
        });
    }
};