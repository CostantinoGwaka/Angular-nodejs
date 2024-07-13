import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(environment.SERVER_URL);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${environment.SERVER_URL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(environment.SERVER_URL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.SERVER_URL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.SERVER_URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(environment.SERVER_URL);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${environment.SERVER_URL}?title=${title}`);
  }
}
