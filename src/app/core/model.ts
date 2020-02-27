export class Disciplina {
  id: number;
  nome: string;
  ativa: number;
  descricao: string;
  cargaHoraria: number;
  professor = new Professor();
}

export class Professor {
  id: number;
}

export class Aluno {
  id: number;
  matricula: string;
  cpf: string;
  nome: string;
  dataNascimento: Date;
  disciplinas: Array<Disciplina> = new Array<Disciplina>();
}
