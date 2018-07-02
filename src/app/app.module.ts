import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { SortByTitlePipe } from './sort-by-title.pipe';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TabBarComponent,
    NavBarComponent,
    ComicDetailComponent,
    ComicsListComponent,
    SortByTitlePipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
