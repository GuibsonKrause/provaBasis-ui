import {Component, OnInit} from '@angular/core';
import {DisciplinaService} from '../../disciplinas/disciplina.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {Aluno} from '../../core/model';
import {AlunoService} from '../aluno.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {
  disciplinas: any[];
  aluno = new Aluno();
  spresp: any;

  constructor(
    private disciplinaService: DisciplinaService,
    private alunoService: AlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.carregarDisciplinas();
  }

  salvar() {
    this.aluno.cpf = this.formatarCpf(this.aluno.cpf);
    this.alunoService
      .adicionar(this.aluno)
      .subscribe(() => {
        this.toasty.success('Aluno cadastrado com sucesso');
      });
    console.log(this.aluno);
  }

  carregarDisciplinas() {
    this.disciplinaService.pesquisar()
      .then(disciplinas => {
        this.disciplinas = disciplinas.map(d => ({ label: d.nome, value: d }));
      })
      .catch(erro => this.errorHandler.handler(erro));
  }

  formatarCpf(cpf) {
    const dot = /\./gi;
    cpf = cpf.replace('-', '');
    cpf = cpf.replace(dot, '');
    return  cpf;
}
}
