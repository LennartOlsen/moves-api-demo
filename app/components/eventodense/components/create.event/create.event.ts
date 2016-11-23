import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { Event as evt } from '../../models/event'

@Component({
	moduleId:module.id,
  	selector: 'create-event-component',
	templateUrl : 'assets/template.html'
})
export class CreateEventComponent {
	@Input() event : evt;
	@Input() loading : Boolean;
	@Output() submit = new EventEmitter<any>();

	constructor(){}
	
	submitted(event : Event){
		event.preventDefault()
		this.submit.emit()
	}
}