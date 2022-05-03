export class ItemCompra {
  private _descricao: string;
  private _qtd: number;
  private _preco: number;

  constructor(descricao: string, qtd: number, preco: number) {
    this._descricao = descricao;
    this._qtd = qtd;
    this._preco = preco;
  }

  public calcSubtotal(): number {
    return this._qtd * this._preco;
  }

  public mostraItem(): string {
    return `Descrição: ${this._descricao}, Preço: ${this._preco}, Qunatidade: ${this._qtd}, Subtotal: ${this.calcSubtotal()}`;
  }
  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }

  public get qtd(): number {
    return this._qtd;
  }

  public set qtd(qtd: number) {
    this._qtd = qtd;
  }

  public get preco(): number {
    return this._preco;
  }

  public set preco(preco: number) {
    this._preco = preco;
  }
}
