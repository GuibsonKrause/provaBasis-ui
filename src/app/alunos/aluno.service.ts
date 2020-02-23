import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


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
}
