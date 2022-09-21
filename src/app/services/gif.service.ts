import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gif } from '../interfaces/gif';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class GifService {
    #apiKey = 'KkQIVU7CgUTlND28O2bDZveA3Z8Vl1kz';
    limit = 12
    offset = 500
    public static gifObservable:any;



    constructor(private http: HttpClient) { }
    search(text: string): Observable<Gif[]> {
        const encodedText = encodeURI(text)
        console.log('searching for ' + text)
        const response = this.http.get<Gif[]>(`https://api.giphy.com/v1/gifs/search?api_key=${this.#apiKey}&limit=${this.limit}&q=${encodedText}`).pipe(
            map(res => res),
            tap(res => console.log(res)),
        )
        if(!GifService.gifObservable) {
            GifService.gifObservable = response
        }
        console.log('bleh', GifService.gifObservable)
        return response
    }
    getTrending(): Observable<Gif[]> {
        console.log('getting trending')
        const response = this.http.get<Gif[]>(`https://api.giphy.com/v1/gifs/trending?api_key=${this.#apiKey}&limit=${this.limit}`).pipe(
            map(res => res),
            tap(res => console.log(res)),
        )
        console.log(response)
        return response
    }
    // getById(gifId:)
    // searchByName(searchText: string): Observable<Gif[]> {
    //     const alteredText = searchText.replace(/\s/g, '+');
    //     return this.http.get<Gif[]>(`https://api.boardgameatlas.com/api/search?name=${alteredText}&client_id=${environment.boardgameAPI}`).pipe(
    //         map(response => response['gifs'])
    //     )
    // };
    // getById(gameId: string): Observable<Gif> {
    //     return this.http.get<Gif>(`https://api.boardgameatlas.com/api/search?ids=${gameId}&client_id=${environment.boardgameAPI}`).pipe(
    //         map(response => response['gifs'])
    //     );
    // }
};