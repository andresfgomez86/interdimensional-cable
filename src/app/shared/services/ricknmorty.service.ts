import { LocationResponse } from '../models/location-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { EpisodeResponse } from '../models/episode-response';
import { CharacterResponse } from '../models/character-response';
import { Character } from '../models/character';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * Service responsible of the connection with the RickAndMortyAPI
 *
 * @export
 * @class RicknmortyService
 */
@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {
  private ricknmortyUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient) { }

  /**
   *  This function gets all the available episodes from the API
   *
   * @returns {Observable<EpisodeResponse>} Observable with the endpoint reponse
   * @memberof RicknmortyService
   */
  getEpisodes (): Observable<EpisodeResponse> {
    const url = `${this.ricknmortyUrl}/episode/`;
    return this.http.get<EpisodeResponse>(url)
      .pipe(
        tap(_ => this.log('fetched episodes')),
        catchError(this.handleError<EpisodeResponse>('getEpisodes', new EpisodeResponse))
      );
  }

  /**
   * This function gets a group of characters filtered by ids
   *
   * @param {String[]} ids - Characters id array
   * @returns {Observable<Character[]>} - Observable with the character array
   * @memberof RicknmortyService
   */
  findCharacters (ids:String[]): Observable<Character[]> {
    const ids_concat:String = ids.reduce((a, b) => `${a},${b}`);
    const url = `${this.ricknmortyUrl}/character/${ids_concat}`;
    if (ids && ids.length > 0)
    return this.http.get<Character[]>(url)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<Character[]>('getCharacters', []))
      );
  }

  /**
   * This function gets all the available characters filtered by page number
   *
   * @param {number} page - Page number
   * @returns {Observable<CharacterResponse>} -Observable with the endpoint reponse
   * @memberof RicknmortyService
   */
  getCharacters (page:number): Observable<CharacterResponse> {
    const url = `${this.ricknmortyUrl}/character/?page=${page}`;
    return this.http.get<CharacterResponse>(url)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<CharacterResponse>('getCharacters', new CharacterResponse))
      );
  }

  /**
   * This function gets all the available Locations filtered by page number
   *
   * @param {number} page - Page number
   * @returns {Observable<LocationResponse>} -Observable with the endpoint reponse
   * @memberof RicknmortyService
   */
  getLocations (page:number): Observable<LocationResponse> {
    const url = `${this.ricknmortyUrl}/location/?page=${page}`;
    return this.http.get<LocationResponse>(url)
      .pipe(
        tap(_ => this.log('fetched locations')),
        catchError(this.handleError<LocationResponse>('getCharacters', new LocationResponse))
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
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    /**
     * Logs a specific message in console
     * @param message - Text of the specific message
     */
    private log(message: string) {
      console.error("Rick and morty service:", message);
    }
}
