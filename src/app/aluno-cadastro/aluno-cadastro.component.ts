import {Component, OnInit} from '@angular/core';

interface Disciplina {
  name: any;
  code: any;
}

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent {
  disciplinas: Disciplina[];
  disciplinasSelecionadas: Disciplina[];

  constructor() {
    this.disciplinas = [
      {name: 'Português', code: 1},
      {name: 'Matemática', code: 2},
      {name: 'Historia', code: 3},
      {name: 'Geografia', code: 4},
      {name: 'Artes', code: 5},
      {name: 'Biologia', code: 6},
      {name: 'Sociologia', code: 7},
      {name: 'Filosofia', code: 8},
      {name: 'Linguas Extrangeiras', code: 9},
      {name: 'Educação Física', code: 10}
    ];
  }
}
