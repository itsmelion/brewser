import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';

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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
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
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`should List beer styles`, async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Brewser');
  // }));

  // it('should have links to the style category', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Brewser!');
  // }));
});
