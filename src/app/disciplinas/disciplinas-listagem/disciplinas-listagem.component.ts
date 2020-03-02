import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastyService} from 'ng2-toasty';
import {ConfirmationService} from 'primeng';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {DisciplinaService} from '../disciplina.service';
import {ActivatedRoute} from '@angular/router';
import {Disciplina, Professor} from '../../core/model';

@Component({
  selector: 'app-disciplinas-listagem',
  templateUrl: './disciplinas-listagem.component.html',
  styleUrls: ['./disciplinas-listagem.component.css']
})
export class DisciplinasListagemComponent implements OnInit {
  disciplinas = [];
  @ViewChild('table') grid;
  showModal: any;
  disciplina: Disciplina = new Disciplina();
  professor: Professor = new Professor();

  constructor(
    private disciplinaService: DisciplinaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
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
      message: 'Deseja excluir esta disciplina?',
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

        this.toasty.success('Disciplina excluida com sucesso!');
      })
      .catch(erro => this.errorHandler.handler(erro));
  }

  detalhar(id: number) {
    this.disciplinaService.findById(id)
      .then(disciplinas => this.disciplina = disciplinas)
      .catch(erro => this.errorHandler.handler(erro));
    this.professor = this.disciplina.professor;
    this.showModal = true;
  }

}
