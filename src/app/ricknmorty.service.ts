import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { EpisodeResponse } from './episode-response';
import { CharacterResponse } from './character-response';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {
  private ricknmortyUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getEpisodes (): Observable<EpisodeResponse> {
    const url = `${this.ricknmortyUrl}/episode/`;
    return this.http.get<EpisodeResponse>(url)
      .pipe(
        tap(_ => this.log('fetched episodes')),
        catchError(this.handleError<EpisodeResponse>('getEpisodes', new EpisodeResponse))
      );
  }

  getCharacters (ids:number[]): Observable<CharacterResponse> {
    const url = `${this.ricknmortyUrl}/character/`;
    return this.http.get<CharacterResponse>(url)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<CharacterResponse>('getCharacters', new CharacterResponse))
      );
  }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}
