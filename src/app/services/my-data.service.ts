import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://api.openbrewerydb.org/breweries/search?page=1&per_page=5&query=test'
    );
  }
}
