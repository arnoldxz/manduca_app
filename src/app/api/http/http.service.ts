import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    // 'auth-token': String(token),
    returnType: 'json'
  });

  URL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  

  get = <TResponse>(endpoint: string): Observable<TResponse> => {
    return this.http.get<TResponse>(`${this.URL}${endpoint}`, { headers: this.headers });
  }
  // get = (endpoint: string) => {
  //   this.http.get(`${this.URL}${endpoint}`, { headers: this.headers })
  //   .pipe(map(res => { console.log(res); return res })).subscribe();
  // }

  //post = <TResponse>(endpoint: string, body: object): Observable<TResponse> =>
    //this.http.post<TResponse>(`${this.URL}${endpoint}`, { headers: this.headers, body: body });
  
  post = <TResponse>(endpoint: string, body?: any): Observable<TResponse> => 
    this.http.post<TResponse>(`${this.URL}${endpoint}`, body, { headers: this.headers });
  
}
