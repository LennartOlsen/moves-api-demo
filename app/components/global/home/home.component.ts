/** Sort of the base of our entire app */
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1>Hello, this is just a demo thingy</h1>
  			<a routerLink="/moves">Go to the moves API setup thingy</a>`
})
export class HomeComponent { }