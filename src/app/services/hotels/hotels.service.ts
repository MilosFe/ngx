import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor(public http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get('hotels').pipe(
      map(res => {
        return res;
      })
    );
  }
}
