import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas-listagem',
  templateUrl: './disciplinas-listagem.component.html',
  styleUrls: ['./disciplinas-listagem.component.css']
})
export class DisciplinasListagemComponent {
  disciplinas = [
    {Id: 1, Nome: 'Português', Descricao: 'Os 4 porquês', CargaHoraria: '10 Hrs'},
    {Id: 2, Nome: 'Matemática', Descricao: 'Limites', CargaHoraria: '20 Hrs'},
    {Id: 3, Nome: 'Historia', Descricao: 'Primeira Guerra', CargaHoraria: '30 Hrs' },
    {Id: 4, Nome: 'Geografia', Descricao: 'Mapa', CargaHoraria: '40 Hrs' },
    {Id: 5, Nome: 'Artes', Descricao: 'Desenhar', CargaHoraria: '50 Hrs' },
    {Id: 6, Nome: 'Biologia', Descricao: 'Mitocondres', CargaHoraria: '60 Hrs' },
    {Id: 7, Nome: 'Sociologia', Descricao: 'Socialismo', CargaHoraria: '70 Hrs' },
    {Id: 8, Nome: 'Filosofia', Descricao: 'Socrates', CargaHoraria: '80 Hrs' },
    {Id: 9, Nome: 'Linguas Extrangeiras', Descricao: 'Inglês', CargaHoraria: '90 Hrs' },
    {Id: 10, Nome: 'Educação Física', Descricao: 'Jogar bola', CargaHoraria: '100 Hrs' }
  ];
}
