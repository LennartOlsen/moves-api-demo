import { Injectable }     		from '@angular/core';
import { Http, Response, Headers, RequestOptions } 		from '@angular/http';
import { MovesDate }           	from '../models/date';
import { Observable }     		from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as Extrator from '../utils/extractor/extractor'


@Injectable()
export class MovesService {
  
  private activitiesUrl = 'https://crossorigin.me/https://api.moves-app.com/api/1.1/user/activities/daily/';  // URL to web API
  private profileUrl = 'https://crossorigin.me/https://api.moves-app.com/api/1.1/user/profile';  // URL to web API

  private AUTH_LS = 'moves_auth';

  auth: string;
  
  constructor (private http: Http) {}
  
  getDaily (day: number): Observable<MovesDate[]> {
    return this.http.get(this.activitiesUrl + day + this.buildAccess())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  validateAuth ( auth : string ):  Observable<any> {
    this.auth = auth;
    return this.http.get(this.profileUrl + this.buildAccess())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  persistAuth ( auth: string ) {
    localStorage.setItem(this.AUTH_LS, auth);
    this.auth = auth;
  }

  private getAuth () : string {
    if(this.auth){
      return this.auth
    }
    return localStorage.getItem(this.AUTH_LS)
  }

  private buildAccess ( ){
    return '?access_token=' + this.getAuth();
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}