import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Aluno, Professor} from '../core/model';
import {BehaviorSubject, Observable} from 'rxjs';
import * as moment from 'moment';

const arrayAlunos = [];

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  alunosUrl = 'http://localhost:8080/api/alunos';

  public detalhado = new BehaviorSubject<Array<any>>(arrayAlunos);

  setAluno(obsAluno: Array<any>) {
    this.detalhado.next(obsAluno);
  }

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
    return this.http.get(`${this.alunosUrl}/detalhes/${id}`)
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
