export class MovesDate {
	date: number;
	lastUpdate : string;
	segments: MovesSegment[]
	summary: MovesSummary[]
}
export class MovesSegment {
	endTime: string
	lastUpdate : string
	startTime : string
	type : string
	activities : MovesActivities[]
}
export class MovesSummary {
	activity : string
	distance : number
	duration : number
	group : string
	steps : number
}
export class MovesActivities {
	activity : string
	distance : number
	duration : number
	endTime : string
	group : string
	manual : boolean
	startTime : string
	steps : number
}