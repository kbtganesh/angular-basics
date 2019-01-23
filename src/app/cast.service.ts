import { Injectable } from '@angular/core';
import { Cast } from './cast';
import { CASTINGS } from './mock-cast';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor() { }

  getCastings(): Observable<Cast[]> {
    return of(CASTINGS);
  }
}
