import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Disciplina} from '../core/model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  disciplinasUrl = 'http://localhost:8080/api/disciplinas';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return  this.http.get(`${this.disciplinasUrl}`)
      .toPromise()
      .then(response => response);
  }

  adicionar(disciplina: Disciplina): Observable<any> {
    return this.http.post(this.disciplinasUrl, disciplina);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.disciplinasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  findById(id: number): Promise<any> {
    return this.http.get(`${this.disciplinasUrl}/detalhes/${id}`)
      .toPromise()
      .then(response => response);
  }
}
