import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ChartModule }    from 'angular2-highcharts';

import { LoaderComponent } from '../loader/loader.component'

@NgModule({
  imports:            [ BrowserModule, ChartModule],
  declarations:      	[ LoaderComponent ],
  exports:				    [ LoaderComponent, BrowserModule, ChartModule ], //Consider doing so that ChartModule is ONLY a part of global
})
export class GlobalModule { }