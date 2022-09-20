import { Gif } from 'src/app/interfaces/gif';
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GifService } from 'src/app/services/gif.service';

@Injectable({
    providedIn: 'root'
})

@Component({
    selector: 'search-bar',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchText: string = '';

    #apiKey;
    constructor(
        private http: HttpClient,
        private gifService: GifService,
    ) {
        this.#apiKey = 'KkQIVU7CgUTlND28O2bDZveA3Z8Vl1kz';
    }

    ngOnInit(): void {
    }
    search() {
        console.log()
        const response = this.gifService.search(this.searchText)
        return response
        // else return 'error'
    };
    //     getById(gameId: string): Observable<Game> {
    //         return this.http.get<Game>(`https://api.boardgameatlas.com/api/search?ids=${gameId}&client_id=${environment.boardgameAPI}`).pipe(
    //             map(response => response['games'])
    //         );
    //     }
    // }
    searsch() {
        console.log('hi')
        console.log('apple')
    }

}
