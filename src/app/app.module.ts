import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StylesComponent } from './styles/styles.component';
import { ApiService } from './api.service';
import { SearchPipe } from './search.pipe';
import { BeersComponent } from './beers/beers.component';


@NgModule({
  declarations: [
    AppComponent,
    StylesComponent,
    SearchPipe,
    BeersComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
