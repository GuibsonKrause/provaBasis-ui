import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.disciplinasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }
}
