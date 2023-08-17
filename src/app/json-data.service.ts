import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrl = 'http://133.242.143.169/json/otenki.json'; // JSONファイルのURL
  private jsonMongo = "http://133.242.143.169/test/test.php";

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  getJsonDataMongo(): Observable<any> {
    return this.http.get(this.jsonMongo);
  }
}
