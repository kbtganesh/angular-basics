import { Injectable } from '@angular/core';
import { Cast } from './cast';
import { CASTINGS } from './mock-cast';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private messageService: MessageService) { }

  getCastings(): Observable<Cast[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(CASTINGS);
  }

  getCast(id: number): Observable<Cast> {
    this.messageService.add(`HeroService: fetched hero id - ${id}`);
    return of(CASTINGS.find(c => c.id === id));
  }
}
