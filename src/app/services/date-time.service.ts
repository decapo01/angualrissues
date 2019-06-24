import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  now(){

    return DateTime.local().setZone('America/Denver')
  }
}
