import { Component, OnInit } from '@angular/core';
import { SearchComponent } from 'src/app/components/search/search.component';
import { Gif } from 'src/app/interfaces/gif';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
