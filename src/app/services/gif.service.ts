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
    offset = 500
    private gifResults?: Gif[]
    constructor(private http: HttpClient) { }
    search(textToSearch?: string): Observable<Gif[]> {
        const encodedText = textToSearch ? encodeURI(textToSearch) : undefined;
        if(this.gifResults) {
            return of(this.gifResults);
        }
        return this.http.get<Gif[]>(`https://api.giphy.com/v1/gifs/search?api_key=${this.#apiKey}&limit=${this.limit}&q=${encodedText}`).pipe(
            tap(ret => this.gifResults = ret),
            tap(ret => console.log(ret),
            )
        );

        // if(textToSearch) {
        //     console.log('searching for ' + textToSearch)

        //     const response = this.http.get<Gif[]>(`https://api.giphy.com/v1/gifs/search?api_key=${this.#apiKey}&limit=${this.limit}&q=${encodedText}`).pipe(
        //         map(res => res),
        //         tap(res => console.log(res)),
        //     )
        // }
        // const hi =  response
        // .subscribe(
        //     (data) => {
        //         this.gifObservable = data
        //     }
        // )
        // if(!this.gifObservable) {
        //     this.gifObservable = response
        // }
        // console.log('bleh', this.gifObservable)
        // return response
    }
    // getTrending(): Observable<Gif[]> {
    //     console.log('getting trending')
    //     const response = this.http.get<Gif[]>(`https://api.giphy.com/v1/gifs/trending?api_key=${this.#apiKey}&limit=${this.limit}`).pipe(
    //         map(res => res),
    //         tap(res => console.log(res)),
    //     )
    //     console.log(response)
    //     return response
    // }
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