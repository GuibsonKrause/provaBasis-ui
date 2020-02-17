import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores-listagem',
  templateUrl: './professores-listagem.component.html',
  styleUrls: ['./professores-listagem.component.css']
})
export class ProfessoresListagemComponent {
  professores = [
    {Id: 1, Nome: 'Lucas Thiago Guilherme Fernandes', Matricula: '123456', AreaAtuacao: 'Português', Idade: 56},
    {Id: 2, Nome: 'Vitória Elisa Silveira', Matricula: '369258', AreaAtuacao: 'Matemática', Idade: 32},
    {Id: 3, Nome: 'Vanessa Sophia Marcela Gonçalves', Matricula: '157954', AreaAtuacao: 'Historia', Idade: 98},
    {Id: 4, Nome: 'Cláudia Sônia Ana Freitas', Matricula: '754896', AreaAtuacao: 'Geografia', Idade: 85},
    {Id: 5, Nome: 'Maitê Bianca Maya dos Santos', Matricula: '789426', AreaAtuacao: 'Artes', Idade: 15},
    {Id: 6, Nome: 'Isabela Francisca Nascimento', Matricula: '657416', AreaAtuacao: 'Biologia', Idade: 52},
    {Id: 7, Nome: 'Enrico Juan Ricardo Campos', Matricula: '854796', AreaAtuacao: 'Sociologia', Idade: 25},
    {Id: 8, Nome: 'Rayssa Sebastiana Silveira', Matricula: '126497', AreaAtuacao: 'Filosofia', Idade: 35},
    {Id: 9, Nome: 'Nicolas Ruan Rezende', Matricula: '594612', AreaAtuacao: 'Linguas Extrangeiras', Idade: 45},
    {Id: 10, Nome: 'Manuel Bruno Almada', Matricula: '421684', AreaAtuacao: 'Educação Física', Idade: 16}
  ];

}
