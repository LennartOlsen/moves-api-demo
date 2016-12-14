import { Injectable }     		from '@angular/core';
import { Http, Response, Headers, RequestOptions } 		from '@angular/http';
import { Point }           	from '../models/point';
import { Event }           	from '../models/event';
import { Observable }     		from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EventOdenseService {
  
  private url = 'http://88.99.34.33:8080/';  // URL to web API
  
  constructor (private http: Http) {}
  
  getPoints (): Observable<Point[]> {
    return this.http.get(this.url + 'points')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getEventPoints(eventId : string) : Observable<Point[]> {
    return this.http.get(this.url + 'events/' + eventId + '/points')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getEvents (): Observable<Event[]> {
    return this.http.get(this.url + 'events')
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getEvent (eventId : string) : Observable<Event[]> {
    return this.http.get(this.url + 'events/' + eventId)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  postEvent(e : Event): Observable<Event> {
    let body = e.toJson();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + 'events', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  
  private handleError (error: any) {
    console.log(error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}