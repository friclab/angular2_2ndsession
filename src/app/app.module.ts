import { PostcreatorComponent } from './components/postcreator/postcreator.component';
import { MaterializeModule } from 'angular2-materialize';
import { PostComponent } from './components/post/post.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PostComponent,
    HeaderComponent,
    PostcreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
