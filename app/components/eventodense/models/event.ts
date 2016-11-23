export class Event {
	id: string
	lat: number = 0;
	lng: number = 0;
	name: string
	end_date : Date = new Date();
	start_date : Date = new Date();
	endTime : number = 0;
	startTime : number = 0;
	description : string
	imageId : string
	radius : number = 0;
	color : string

	toJson() : string {
		/** Variable for holding types */
		let _this = new Event()
		for(var prop in this){
			if(typeof _this[prop] === "number"){
				this[prop] = parseInt(this[prop])
			}
			if(_this[prop] instanceof Date){
				if(prop === 'end_date'){
					this.endTime = Date.parse(this[prop]) / 1000
				}
				if(prop === 'start_date'){
					this.startTime = Date.parse(this[prop]) / 1000
				}
			}
		}
		return JSON.stringify(this)
	}
}