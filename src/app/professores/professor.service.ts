import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professoresUrl = 'http://localhost:8080/api/professores';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return  this.http.get(`${this.professoresUrl}`)
      .toPromise()
      .then(response => response);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.professoresUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }
}
