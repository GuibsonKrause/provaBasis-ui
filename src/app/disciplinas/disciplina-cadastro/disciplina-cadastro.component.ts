import { Component, OnInit } from '@angular/core';
import {DisciplinaService} from '../disciplina.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ProfessorService} from '../../professores/professor.service';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
  checked = false;
  professores = [];

  constructor(
    private professorService: ProfessorService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.pesquisar()
      .then(professores => {
        this.professores = professores.map(p => ({ label: p.nome, value: p.id }));
      })
      .catch(erro => this.errorHandler.handler(erro));
  }
}
