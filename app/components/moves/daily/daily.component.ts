import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { MovesService } from '../service/moves.service'

import { MovesDate } from '../models/date'
import { MovesChartConverter } from '../utils/converters/chart-converter/chart-converter'

@Component({
	moduleId:module.id,
  selector: 'moves-init',
	templateUrl : 'assets/template.html'
})
export class MovesDailyComponent {

	date: number;
	opts: any; //trust me
	loading : boolean = true;
	ready : boolean = false;
	dateErrorMessage: string;

	constructor(private service: MovesService, private router: Router){}
	
	ngOnInit(){
		this.loading = false;
	}

	submitDate(){
		this.loading = true;
		this.service.getDaily(this.date).subscribe(
			response => this.handleResponse(response),
			error => this.handleError(error)
		)
	}

	private handleResponse(resp : MovesDate[]){
		this.loading = false;
		this.ready = true;

		this.opts = MovesChartConverter(resp)
	}

	private handleError(resp : any){
		this.loading = false;
		this.dateErrorMessage = resp;
	}
}