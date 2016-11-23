import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventOdenseService } from '../service/eventodense.service'
import { Point } from '../models/point'
import { Event } from '../models/event'

import { PointsToLines } from '../mappers/points.to.lines'

import { MapService } from '../../leaflet/service/map.service'
import * as L from "leaflet"

@Component({
	moduleId:module.id,
  	selector: 'eventodense-event',
	styleUrls:['assets/style.css'],
	templateUrl : 'assets/template.html'
})
export class EventOdenseEventComponent {
	loading : boolean = true;
	error: string;
	map: L.Map = null;
	private sub: any;
	private eventId : string;
	private event : Event;
	private points : Point[];

	constructor(
		private service: EventOdenseService, 
		private route: ActivatedRoute, 
		private mapService: MapService){}
	
	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
       		this.eventId = params['id'];
			this.service.getEvent(this.eventId).subscribe(
				response => this.handleEventResponse(response),
				error => this.handleError(error)
			)
    	});
	}

	handlePointResponse(points : Point[]) {
		this.points = points;
		this.setup();
	}

	handleEventResponse(event : Event[]){
		if(!event || !event[0]){
			this.loading = false;
			this.error = 'Could not load event';
			return;
		}
		this.event = event[0];
		this.service.getEventPoints(this.eventId).subscribe(
			response => this.handlePointResponse(response),
			error => this.handleError(error)
		)
	}

	handleError(err){
		console.error(err)
		this.loading = false;
	}

	private setup() {
		this.buildMap();
		this.plotEventOnMap(this.event);
		this.addLines(this.points);
		this.loading = false;
	}

	private buildMap(){
        let map = L.map("map", {
            zoomControl: false,
            center: L.latLng(this.event.lat, this.event.lng),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });
		this.map = map;
	}

	private plotEventOnMap(event : Event) {
		L.circle([event.lat, event.lng], event.radius, {color: event.color}).addTo(this.map)
	}
	
	private addLines(points){
		let ptl : PointsToLines = new PointsToLines(this.points);
		let lines = ptl.getLines();
		let pointArr = Array();
		for( let line of lines){
			L.polyline(line.points, {color: line.color}).addTo(this.map);
		}	
	}
}