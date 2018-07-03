import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { AboutComponent } from './about/about.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'comics/:id', component: ComicDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
