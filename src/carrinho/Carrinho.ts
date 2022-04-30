import { ItemCompra } from '../compra/ItemCompra';

export class Cariinho {
  private _listaItens: ItemCompra[];
  private _totalCompra: number;
  private _porcDesconto: number;
  private _valorPagar: number;

  constructor(listaItens: ItemCompra[], porcDesconto: number) {
    this._listaItens = listaItens;
    this._porcDesconto = porcDesconto;
    this._totalCompra = this.setTotalCompra(0);
    this._valorPagar = this.setValorPagar(0);
  }

  public calcDesconto(soma: number): number {
    const desconto = (soma - soma * (this._porcDesconto / 100)).toFixed(2);
    return Number(desconto);
  }

  public mostraCarrinho() {
    for (let index = 0; index < this._listaItens.length; index++) {
      console.log(`${index + 1}, ${this._listaItens[index].mostraItem()}`);
    }
  }

  public somaValores(): number {
    let soma = 0;
    for (let index = 0; index < this._listaItens.length; index++) {
      soma += this._listaItens[index].calcSubtotal();
    }

    return soma;
  }

  public getTotalCompra() {
    return this._totalCompra;
  }

  private setTotalCompra(total: number) {
    if (total === 0) {
      return this.somaValores();
    }
    return this._totalCompra;
  }

  public getValorPagar() {
    return this._valorPagar;
  }

  private setValorPagar(compra: number) {
    if (compra === 0) {
      const total = this.somaValores();
      const totalComDesconto = this.calcDesconto(total);
      return totalComDesconto;
    }
    return this._valorPagar;
  }
}
