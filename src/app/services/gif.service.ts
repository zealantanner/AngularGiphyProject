import { Injectable } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gif } from '../interfaces/gif';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class GifService {
    #apiKey = 'KkQIVU7CgUTlND28O2bDZveA3Z8Vl1kz';
    limit = 12
    offset = Math.floor(Math.random() *500)
    private gifResults?: Gif[]
    constructor(private http: HttpClient) { }
    search(textToSearch?: string, wantTrending:boolean=false): Observable<Gif[]> {
        const encodedText = textToSearch ? encodeURI(textToSearch) : undefined;
        if(this.gifResults) {
            return of(this.gifResults);
        }
        return this.http.get<any>(`https://api.giphy.com/v1/gifs/${wantTrending?'trending':'search'}?api_key=${this.#apiKey}&offset=${this.offset}&limit=${this.limit}&q=${encodedText}`)
            .pipe(
                tap(res => this.gifResults = res),
                //     tap(res => console.log(res),
                //     )
            );
    }
};