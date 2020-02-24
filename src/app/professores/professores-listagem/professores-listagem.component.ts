import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {ToastyService} from 'ng2-toasty';
import {ConfirmationService} from 'primeng';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ProfessorService} from '../professor.service';

@Component({
  selector: 'app-professores-listagem',
  templateUrl: './professores-listagem.component.html',
  styleUrls: ['./professores-listagem.component.css']
})
export class ProfessoresListagemComponent implements OnInit {
  professores = [];

  @ViewChild('table') grid;

  constructor(
    private professorService: ProfessorService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) {
  }

  ngOnInit() {
    this.pesquisar();
  }


  pesquisar() {
    this.professorService.pesquisar()
      .then(professores => this.professores = professores)
      .catch(erro => this.errorHandler.handler(erro));
  }

  public calcularIdade(nascimento: any): number {
    return moment().diff(nascimento, 'years');
  }

  confirmarExlusao(professor: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir este professor?',
      accept: () => {
        this.excluir(professor);
      }
    });
  }

  excluir(professor: any) {
    this.professorService.excluir(professor.matricula)
      .then(() => {
        this.grid.first = 0;
        this.pesquisar();

        this.toasty.success('Professor excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handler(erro));
  }

}
