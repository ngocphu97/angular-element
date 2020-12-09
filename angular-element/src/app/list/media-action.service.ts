import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaActionService {

  public mainColor = new Subject<string>();
  public secondaryColor = new Subject<string>();

  constructor(private http: HttpClient) { }

  setColor(color: string) {
    this.mainColor.next(color);
  }

  setupSecondaryColor(color: string) {
    this.secondaryColor.next(color);
  }

  getList(): Observable<any> {
    return this.http.get('http://localhost:3000/media-list');
  }


}
