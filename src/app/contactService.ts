import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private URL = 'https://jsonplaceholder.typicode.com/posts'; // Mock API para pruebas

  constructor(private http: HttpClient) {}

  enviarReclamo(reclamo: any): Observable<any> {
    return this.http.post(this.URL, reclamo);
  }
}