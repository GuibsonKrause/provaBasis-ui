import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {ToastyService} from 'ng2-toasty';
import {ConfirmationService} from 'primeng';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ProfessorService} from '../../professores/professor.service';
import {DisciplinaService} from '../disciplina.service';

@Component({
  selector: 'app-disciplinas-listagem',
  templateUrl: './disciplinas-listagem.component.html',
  styleUrls: ['./disciplinas-listagem.component.css']
})
export class DisciplinasListagemComponent implements OnInit {
  disciplinas = [];

  @ViewChild('table') grid;

  constructor(
    private disciplinaService: DisciplinaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) {
  }

  ngOnInit() {
    this.pesquisar();
  }


  pesquisar() {
    this.disciplinaService.pesquisar()
      .then(disciplinas => this.disciplinas = disciplinas)
      .catch(erro => this.errorHandler.handler(erro));
  }

  confirmarExlusao(disciplina: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir este professor?',
      accept: () => {
        this.excluir(disciplina);
      }
    });
  }

  excluir(disciplina: any) {
    this.disciplinaService.excluir(disciplina.id)
      .then(() => {
        this.grid.first = 0;
        this.pesquisar();

        this.toasty.success('Professor excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handler(erro));
  }

}
