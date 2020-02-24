import {Component, OnInit} from '@angular/core';
import {DisciplinaService} from '../../disciplinas/disciplina.service';
import {ErrorHandlerService} from '../../core/error-handler.service';

interface Disciplina {
  name: any;
  code: any;
}

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {
  disciplinas: Disciplina[];
  disciplinasSelecionadas: Disciplina[];

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
        this.disciplinas = disciplinas.map(d => ({ nome: d.nome, code: d.id }));
      })
      .catch(erro => this.errorHandler.handler(erro));
  }
}
