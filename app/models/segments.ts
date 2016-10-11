export class Segments {
	type		: string
	startTime	: string
	endTime 	: string
	activities	: Activities[]
	lastUpdate	: string
}

export class Activities {
	activity 	: string
	group		: string
	manual		: boolean
	startTime	: string
	endTime 	: string
	duration	: number
	distance	: number
	steps		: number
}