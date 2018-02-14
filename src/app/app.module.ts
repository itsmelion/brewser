import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StylesComponent } from './styles/styles.component';
import { ApiService } from './api.service';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StylesComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
