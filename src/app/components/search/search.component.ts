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


    constructor(
        private http: HttpClient,
        private gifService: GifService,
    ) {}

    ngOnInit(): void {
        this.gifService.search('', true)
    }
    search() {
        this.gifService.search(this.searchText)
        console.log(this.gifService.search(this.searchText))
        // else return 'error'
    };
    //     getById(gameId: string): Observable<Game> {
    //         return this.http.get<Game>(`https://api.boardgameatlas.com/api/search?ids=${gameId}&client_id=${environment.boardgameAPI}`).pipe(
    //             map(response => response['games'])
    //         );
    //     }
    // }

}
