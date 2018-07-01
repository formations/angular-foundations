import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicsListComponent } from './comics-list/comics-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TabBarComponent,
    NavBarComponent,
    ComicDetailComponent,
    ComicsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
