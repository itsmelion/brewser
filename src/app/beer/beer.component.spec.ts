import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../app.routing';
import { APP_BASE_HREF } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { StylesComponent } from '../styles/styles.component';
import { ApiService } from '../api.service';
import { SearchPipe } from '../search.pipe';
import { BeersComponent } from '../beers/beers.component';
import { HomeComponent } from '../home/home.component';
import { BeerComponent } from '../beer/beer.component';
import { OrganicPipe } from '../organic.pipe';
import { OrderModule } from 'ngx-order-pipe';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;
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
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
