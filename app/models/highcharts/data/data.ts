/**
 * The could contain data models for all different types of charts in Highcharts
 */
export interface HighchartsData {}

export class HighchartsStepData implements HighchartsData {
	data: any[] //For line-chart-step (theese can be numbers)
	step: string //Type of step (left, right, center)
	name: string //name of line

	constructor(){
		this.data = new Array();
	}
}