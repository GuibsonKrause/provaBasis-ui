import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent {
  disciplinas = [
    {label: 'Português', value: 1},
    {label: 'Matemática', value: 2},
    {label: 'Historia', value: 3},
    {label: 'Geografia', value: 4},
    {label: 'Artes', value: 5},
    {label: 'Biologia', value: 6},
    {label: 'Sociologia', value: 7},
    {label: 'Filosofia', value: 8},
    {label: 'Linguas Extrangeiras', value: 9},
    {label: 'Educação Física', value: 10}
  ];
}
