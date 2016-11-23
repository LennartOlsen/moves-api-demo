import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { EventOdenseService } from '../service/eventodense.service'
import { Event } from '../models/event'

@Component({
	moduleId:module.id,
  	selector: 'eventodense-init',
	styleUrls:['assets/style.css'],
	templateUrl : 'assets/template.html'
})
export class EventOdenseInitComponent {

	auth: string;
	loading : boolean = true;
	profileErrorMessage: string;
	map: L.Map = null;
	events: Event[] = null;
	newEvent : Event;

	constructor(
		private service: EventOdenseService, 
		private router: Router){}
	
	ngOnInit(){
		this.newEvent = new Event();
		this.service.getEvents().subscribe(
			response => this.handleResponse(response),
			error => this.handleError(error)
		)
	}

	handleResponse(events : Event[]) {
		this.events = events
		this.loading = false
	}

	handleEventResponse(resp){
		console.log(resp)
		this.loading = false;
	}

	onEventSubmit(){
		if(!this.loading){
			this.loading = true;
			this.service.postEvent(this.newEvent).subscribe(
				response => this.handleEventResponse(response),
				error => this.handleError(error)
			)
		}
	}

	handleError(err){
		console.error(err)
		this.loading = false;
	}
}