import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gif } from '../interfaces/gif';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class GifService {
    #apiKey = 'KkQIVU7CgUTlND28O2bDZveA3Z8Vl1kz';
    gifs: Gif[] = []
    constructor(private http: HttpClient) { }
    search(text: string): Observable<Gif[]> {
        text = encodeURI(text)
        console.log('searching')
        const response = this.http.get<Gif[]>(`https://api.giphy.com/v1/gifs/search?api_key=${this.#apiKey}&limit=12&q=${text}`)
        console.log(response)
        console.log(text)
        return response
        // else return 'error'
    };
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
}
