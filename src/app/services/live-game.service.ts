import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs';
import { repeat, share, catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LiveGameService {

  private liveGameStats$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.liveGameStats$ = this.getGameStats().pipe(
      catchError((err) => of(null).pipe(delay(1000))),
      repeat(),
      share()
    );
  }

  public getGameStats(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8080/https://127.0.0.1:2999/liveclientdata/allgamedata');
  }

  public getLiveGameStats(): Observable<any> {

    return this.liveGameStats$;
  }
}
