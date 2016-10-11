import { MovesDate } from '../../../models/date'
import { HighchartsLineStepChart } from '../../../../../models/highcharts/line-chart/line-chart'
import { HighchartsStepData } from '../../../../../models/highcharts/data/data'
/**
 * WARNING : Mappers are always discusting and arbitrary!
 */
export function MovesChartConverter(movesDate : MovesDate[]) : HighchartsLineStepChart {
	let highChart = new HighchartsLineStepChart();
	
	console.log(movesDate);
	let hours: Array<any> = new Array();

	let found = false;
	for(let md of movesDate){
		/** Set steps */
		if(md.segments){
			let n : Date = getDate(String(md.date));
			let h = 0;
			while(h != 24){
				n.setHours(h);
				hours.push(shortHandDateTime(n))
				h++;
			}
			highChart.xAxis.categories = hours;
			let highDataArr = new Array<HighchartsStepData>();
			for(let segment of md.segments){
				for (let activity of segment.activities){
					found = false;
					for(let hiData of highDataArr){
						if(hiData.name == activity.activity){
							for(let hour of hours){
								if(shortHandDateTime(getDate(activity.startTime)) == hour){
									hiData.data.push( (activity.distance / activity.duration) * 3.6 )
								}
							}
							found = true;
							break;
						}
					}
					if(!found){
						let hiData = new HighchartsStepData();
						hiData.name = activity.activity;
						hiData.step = 'center';
						for(let hour of hours){
							if(shortHandDateTime(getDate(activity.startTime)) == hour){
								hiData.data.push( (activity.distance / activity.duration) * 3.6 )	
							}
						}
						highDataArr.push(hiData);
					}
				}
			}
			for(let hiData of highDataArr) 
			highChart.series =  highDataArr
		}
	}
	console.log(hours);

	return highChart;
}
/**
 * Takes a MovesDate
 * ex format : 20161004T102412+0200
 */
function getDate(date : string) : Date{
	let d = new Date();
	d.setFullYear(Number(date.substr(0,4)))
	date = date.substr(4)
	/** Months are 0 based */
	d.setMonth(Number(date.substr(0,2)) - 1)
	date = date.substr(2)
	d.setDate(Number(date.substr(0,2)))
	/** Remove the T as well */
	date = date.substr(3)
	if(date.length != 0){
		d.setHours(Number(date.substr(0,2)))
		date = date.substr(2)
		d.setMinutes(Number(date.substr(0,2)))
		date = date.substr(2)
		d.setSeconds(Number(date.substr(0,2)))
	}
	return d
}

function shortHandDateTime(date: Date) : string {
	return date.getMonth() + '/' +date.getDate() + '-' + date.getUTCHours() + ':00:00';
}
