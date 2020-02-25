import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Aluno} from '../core/model';
import {Observable} from 'rxjs';
import * as moment from 'moment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  alunosUrl = 'http://localhost:8080/api/alunos';

  constructor(private http: HttpClient) {
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.alunosUrl}`)
      .toPromise()
      .then(response => response);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.alunosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(aluno: Aluno): Observable<any> {
    return this.http.post(this.alunosUrl, aluno);
  }

  findById(id: number): Promise<any> {
    return this.http.get(`${this.alunosUrl}/id`)
      .toPromise()
      .then(response => response);
  }

  atualizar(aluno: Aluno): Observable<any> {
    return this.http.put(this.alunosUrl, aluno);
  }

  private converterStringsParaDatas(alunos: Aluno[]) {
    for (const aluno of alunos) {
      aluno.dataNascimento = moment(aluno.dataNascimento,
        'YYYY-MM-DD').toDate();
    }
  }
}
