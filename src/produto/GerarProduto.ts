import { Produto } from './Produto';
import fs from 'node:fs';
import readline from 'node:readline';

interface IGerarProduto {
  criarProduto(): Promise<Produto[]>;
}

export class GerarProduto implements IGerarProduto {
  async criarProduto(): Promise<Produto[]> {
    const listaProdutos = [];
    const fileStream = fs.createReadStream('src/data/PRODUTOS.txt');
    const readLine = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of readLine) {
      const codigo = Number(line.split(';')[0]);
      const descricao = line.split(';')[1];
      const preco = Number(line.split(';')[2]);

      listaProdutos.push(new Produto(codigo, descricao, preco));
    }
    console.log('Produtos criados com sucesso!', listaProdutos);
    return listaProdutos;
  }
}
