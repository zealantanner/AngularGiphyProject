import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SearchComponent } from './components/search/search.component';
import { GifGridComponent } from './components/gif-grid/gif-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        MainContentComponent,
        SearchComponent,
        GifGridComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgxMasonryModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
