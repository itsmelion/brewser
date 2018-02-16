import { async, ComponentFixture,  inject, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeersComponent],
      providers: [ApiService, { provide: APP_BASE_HREF, useValue : '/' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
