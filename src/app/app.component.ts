import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provabasis-ui';
  alunos = [
    {Id: 1, Nome: 'Fulano de Tau', Matricula: '123456', Idade: 56},
    {Id: 2, Nome: 'Bertrano', Matricula: '369258', Idade: 32},
    {Id: 3, Nome: 'João da Silva', Matricula: '157954', Idade: 98},
    {Id: 4, Nome: 'Dona Maria', Matricula: '754896', Idade: 85},
    {Id: 5, Nome: 'Silverina das Neves', Matricula: '789426', Idade: 15},
    {Id: 6, Nome: 'Sebastiana', Matricula: '657416', Idade: 52},
    {Id: 7, Nome: 'Paula Tejando', Matricula: '854796', Idade: 25},
    {Id: 8, Nome: 'Tomas Turbando', Matricula: '126497', Idade: 35},
    {Id: 9, Nome: 'Beijamin Arrola', Matricula: '594612', Idade: 45},
    {Id: 10, Nome: 'Oscar Alho', Matricula: '421684', Idade: 16}
  ];
}
