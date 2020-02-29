import { Component, OnInit } from '@angular/core';
import {DisciplinaService} from '../disciplina.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ProfessorService} from '../../professores/professor.service';
import {ToastyService} from 'ng2-toasty';
import {Disciplina} from '../../core/model';
import {SelectItem} from "primeng";

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
  checked = false;
  professores: SelectItem[];
  disciplina = new Disciplina();

  constructor(
    private professorService: ProfessorService,
    private disciplinaService: DisciplinaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
  ) {}

  ngOnInit() {
    this.carregarProfessores();
    console.log(this.professores);
  }

  salvar() {
    this.ativaParceInt();
    this.disciplinaService
      .adicionar(this.disciplina)
      .subscribe(() => {
        this.toasty.success('Disciplina cadastrada com sucesso!');
      }, error => this.errorHandler.handler(error));
  }

  carregarProfessores() {
    this.professorService.pesquisar()
      .then(professores => {
        this.professores = professores.map(p => ({ label: p.nome, value: p }));
      })
      .catch(erro => this.errorHandler.handler(erro));
  }

  ativaParceInt() {
    this.disciplina.ativa = this.disciplina.ativa ? 1 : 0;
  }
}
