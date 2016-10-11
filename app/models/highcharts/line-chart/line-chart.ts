import { HighchartsCategories } from '../categories/categories'
import { HighchartsStepData } from '../data/data'

export class HighchartsLineStepChart {
	title : string
	xAxis : HighchartsCategories;
	series : HighchartsStepData[]

	constructor(){
		this.xAxis = new HighchartsCategories;
		this.series = new Array();
	}
}