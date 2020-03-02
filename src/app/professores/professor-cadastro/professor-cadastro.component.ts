import { Component, OnInit } from '@angular/core';
import {Aluno, Professor} from '../../core/model';
import {ProfessorService} from '../professor.service';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css']
})
export class ProfessorCadastroComponent implements OnInit {
  professor = new Professor();

  constructor(
    private professorService: ProfessorService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  salvar(form) {
    this.professorService
      .adicionar(this.professor)
      .subscribe(() => {
        this.toasty.success('Professor cadastrado com sucesso!');
      }, error => this.errorHandler.handler(error));
    this.resetForm(form);
  }

  resetForm(form) {
    form.reset();
    setTimeout(function() {
      this.professor = new Professor();
    }.bind(this), 1);
  }

}
