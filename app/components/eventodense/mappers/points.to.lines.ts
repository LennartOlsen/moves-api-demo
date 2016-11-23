import { Point } from '../models/point'
import { Device } from '../models/device'
import { PolyLine } from '../../leaflet/models/polyline'
import { LatLng } from '../../leaflet/models/latlng'
export class PointsToLines {
	points: Point[]
	devices : Device[] = null;

	constructor(points: Point[]){
		this.points = points;
	}

	getLines() : PolyLine[]{
		let lines : PolyLine[] = new Array();
		
		if(!this.devices){this.getDevices()}

		for(let d of this.devices ){
			let p = new PolyLine();
			p.points = new Array();
			for(let point of d.points ){
				let latlng = new LatLng;
				latlng.lat = point.lat;
				latlng.lng = point.lng;
				p.points.push(latlng);
				p.color = d.color;
			}
			lines.push(p)
		}
		
		return lines;
	}

	getDevices() : Device[] {
		if(this.devices){return this.devices}
		let tempKeyVal : { [key: string]: Point[] } = {};
		let devices = new Array();
		for( let point of this.points ){
			if(!tempKeyVal[point.deviceId]){
				tempKeyVal[point.deviceId] = new Array();
			}
			tempKeyVal[point.deviceId].push(point)
		}
		for(var key in tempKeyVal){
			let d = new Device();
			d.id = key
			d.color = buildColor(key)
			d.points = tempKeyVal[key];
		
		
			devices.push(d);
		}

		this.devices = devices;

		return devices;
	}
}

function buildColor(input) : string {
	let R = Math.round(seededRandom(0,255, parseInt(input) + 'R'.charCodeAt(0) ));
	let G = Math.round(seededRandom(0,255, parseInt(input) + 'G'.charCodeAt(0) ));
	let B = Math.round(seededRandom(0,255, parseInt(input) + 'B'.charCodeAt(0) ));
	return 'RGBA(' + R + ',' + B + ',' + G + ',0.5)';
}

function seededRandom(max : number, min: number, seed : number) {
    max = max || 1;
    min = min || 0;
 
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280;
 
    return min + rnd * (max - min);
}