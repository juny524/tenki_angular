import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrl = 'https://ik1-108-60915.vs.sakura.ne.jp/json/otenki.json'; // JSONファイルのURL
  private jsonMongo = "https://ik1-108-60915.vs.sakura.ne.jp/test/test.php";

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  getJsonDataMongo(): Observable<any> {
    return this.http.get(this.jsonMongo);
  }
}
