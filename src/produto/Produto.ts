export class Produto {
  private _codigo: number;
  private _descricao: string;
  private _preco: number;

  constructor(codigo: number, descricao: string, preco: number) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._preco = preco;
  }

  public get codigo(): number {
    return this._codigo;
  }

  public set codigo(codigo: number) {
    this._codigo = codigo;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }

  public get preco(): number {
    return this._preco;
  }

  public set preco(preco: number) {
    this._preco = preco;
  }
}
