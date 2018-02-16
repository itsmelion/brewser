import { TestBed, inject, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StylesComponent,
        BeersComponent,
        HomeComponent,
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
      providers: [ApiService, { provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
