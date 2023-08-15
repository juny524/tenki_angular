import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrl = 'http://133.242.143.169/json/otenki.json'; // JSONファイルのURL

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
