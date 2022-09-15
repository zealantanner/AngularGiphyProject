import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        MainContentComponent,
        SearchComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
