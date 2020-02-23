import {Component, OnInit, ViewChild} from '@angular/core';
import {AlunoService} from '../aluno.service';
import * as moment from 'moment';
import {ToastyService} from 'ng2-toasty';
import {ConfirmationService} from 'primeng';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css']
})
export class AlunosListagemComponent implements OnInit {
  alunos = [];
  @ViewChild('table') grid;

  constructor(
    private alunoService: AlunoService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) {
  }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.alunoService.pesquisar()
      .then(alunos => this.alunos = alunos)
      .catch(erro => this.errorHandler.handler(erro));
  }

  public calcularIdade(nascimento: any): number {
    return moment().diff(nascimento, 'years');
  }

  confirmarExlusao(aluno: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir este aluno?',
      accept: () => {
        this.excluir(aluno);
      }
    });
  }

  excluir(aluno: any) {
    this.alunoService.excluir(aluno.id)
      .then(() => {
        this.grid.first = 0;
        this.pesquisar();

        this.toasty.success('Aluno excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handler(erro));
  }

}
