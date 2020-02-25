import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Aluno} from '../core/model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  alunosUrl = 'http://localhost:8080/api/alunos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return  this.http.get(`${this.alunosUrl}`)
    .toPromise()
    .then(response => response);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.alunosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  /*
  adicionar(aluno: Aluno): Promise<Aluno> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.alunosUrl,
      JSON.stringify(aluno), {headers})
      .toPromise()
      .then(response => response)
  }
   */
/*
  adicionar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.alunosUrl, aluno);
  }

 */

  adicionar(aluno: Aluno): Observable<any> {
    return this.http.post(this.alunosUrl, aluno);
  }

}
