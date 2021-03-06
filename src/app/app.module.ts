import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StylesComponent } from './styles/styles.component';
import { ApiService } from './api.service';
import { SearchPipe } from './search.pipe';
import { BeersComponent } from './beers/beers.component';
import { HomeComponent } from './home/home.component';
import { BeerComponent } from './beer/beer.component';
import { OrganicPipe } from './organic.pipe';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StylesComponent,
    BeersComponent,
    BeerComponent,
    SearchPipe,
    OrganicPipe,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    OrderModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
