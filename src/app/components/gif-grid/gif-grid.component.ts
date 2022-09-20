import { Component, OnInit } from '@angular/core';
import { SearchComponent } from 'src/app/components/search/search.component';
import { Gif } from 'src/app/interfaces/gif';
import { GifService } from 'src/app/services/gif.service';

@Component({
    selector: 'gif-grid',
    templateUrl: './gif-grid.component.html',
    styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {

    constructor(
        private gifService: GifService,
    ) { }
    

    ngOnInit(): void {
    }
}
