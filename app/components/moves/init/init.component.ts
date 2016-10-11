import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { MovesService } from '../service/moves.service'

@Component({
	moduleId:module.id,
  	selector: 'moves-init',
	templateUrl : 'assets/template.html'
})
export class MovesInitComponent {

	auth: string;
	loading : boolean = true;
	profileErrorMessage: string;

	constructor(private service: MovesService, private router: Router){}
	
	ngOnInit(){
		this.loading = false;
	}

	submitAuth(){
		this.loading = true;

		this.service.validateAuth(this.auth).subscribe(
			response => this.handleProfileResponse(response, false),
			error => this.handleProfileResponse(error, true)
		)
	}

	private handleProfileResponse(resp, isError){
		if(isError){
			this.loading = false;
			this.profileErrorMessage = 'Bad auth';
		} else {
			this.loading = false;
			this.service.persistAuth(this.auth);
			this.router.navigate(['/moves/daily'])
		}
	}
}