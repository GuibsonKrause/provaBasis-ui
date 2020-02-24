import {Component, OnInit} from '@angular/core';
import {DisciplinaService} from '../../disciplinas/disciplina.service';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {
  disciplinas = [];

  constructor(
    private disciplinaService: DisciplinaService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    this.disciplinaService.pesquisar()
      .then(disciplinas => {
        this.disciplinas = disciplinas.map(d => ({ name: d.nome, code: d.id }));
      })
      .catch(erro => this.errorHandler.handler(erro));
  }
}
