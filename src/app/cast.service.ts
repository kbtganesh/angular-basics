import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Cast } from './cast';
import { CASTINGS } from './mock-cast';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CastService {

  private heroesUrl = 'api/castings';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


  getCastings(): Observable<Cast[]> {
    return this.http.get<Cast[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('HeroService: fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getCast(id: number): Observable<Cast> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Cast>(url).pipe(
      tap(_ => this.log(`HeroService: fetched hero id=${id}`)),
      catchError(this.handleError<Cast>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateCast (cast: Cast): Observable<any> {
    return this.http.put(this.heroesUrl, cast, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${cast.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
