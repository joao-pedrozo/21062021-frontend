import { HttpClient } from '@angular/common/http';
import { Medico } from '../models/Medico';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  private baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.baseURL}medico/listar`);
  }

  cadastrar(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${this.baseURL}medico/cadastrar`, medico);
  }
}
