import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

// const routes: Routes = [
//   { path: '', redirectTo: 'search', pathMatch: 'full' },
//   { path: 'search', component: GameSearchComponent },
//   { path: 'game-details', component: GameDetailsComponent },
//   { path: 'owned', component: UserSelectionsComponent },
//   { path: 'wishlist', component: UserSelectionsComponent },
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
