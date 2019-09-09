import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OVERVIEW_DATA_URL, SPECIFICATIONS_URL,DOCUMENTATIONS_URL } from 'src/app/shared/constants/paths';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
* This is a Data Bus service, meant for retrieving/passing data in between components, located anywhere in the component tree
* This is a core module service which has been provided in the root of the application
* This means this is a singleton service available across entire application.
* DONOT provide it anywhere, else it will lead to creation of duplicate instances of this service
*/

@Injectable({
  providedIn: 'root'
})
export class DataBusService {

  constructor(private http: HttpClient) { }


  getOverviewData() {
    return this.http.get(OVERVIEW_DATA_URL);
  }

  getSpecificationsData(): Observable<any> {
    return this.http.get(SPECIFICATIONS_URL);
  }
  getDocumentationsData(): Observable<any> {
    return this.http.get(DOCUMENTATIONS_URL);
  }
}
