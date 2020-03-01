import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Professor} from '../core/model';
import {BehaviorSubject, Observable} from 'rxjs';

const arrayProfessores = [];

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professoresUrl = 'http://localhost:8080/api/professores';

  public detalhado = new BehaviorSubject<Array<any>>(arrayProfessores);

  setProfessor(obsProfessor: Array<any>) {
    this.detalhado.next(obsProfessor);
  }

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return  this.http.get(`${this.professoresUrl}`)
      .toPromise()
      .then(response => response);
  }

  adicionar(professor: Professor): Observable<any> {
    return this.http.post(this.professoresUrl, professor);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.professoresUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }
}
