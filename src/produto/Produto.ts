export class Produto {
  codigo: number;
  descricao: string;
  preco: number;

  constructor(codigo: number, descricao: string, preco: number) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco;
  }
}
