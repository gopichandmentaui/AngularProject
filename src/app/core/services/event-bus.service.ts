import { Injectable } from '@angular/core';

/*
* This is an EVENT Bus service, meant for retrieving/passing events in between components, located anywhere in the component tree
* This is a core module service which has been provided in the root of the application
* This means this is a singleton service available across entire application.
* DONOT provide it providers anywhere, else it will lead to creation of duplicate instances of this service
*/

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  constructor() { }
}
