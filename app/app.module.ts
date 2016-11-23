import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './components/app.component';
import { HomeComponent }  from './components/global/home/home.component';

import { routing,
         appRoutingProviders }  from './components/global/route/app.routing';

import { MovesModule } from './components/moves/module/moves.module'

import { EventOdenseModule } from './components/eventodense/module/eventodense.module'


@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule, 
                  JsonpModule, 
                  routing,
                  MovesModule,
                  EventOdenseModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders
  ],
})
export class AppModule { }