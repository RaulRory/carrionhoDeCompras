import { Cariinho } from './carrinho/Carrinho';
import { GerarProduto } from './produto/GerarProduto';
import { ItemCompra } from './compra/ItemCompra';

import promptSync from 'prompt-sync';

async function main() {
  const dadosProduto = new GerarProduto();
  const produto = await dadosProduto.criarProduto();
  const prompt = promptSync();
  const listaItens = [];
  let opcao = 1;
  let respostaOpcao;

  while (opcao === 1) {
    const codigo = prompt('Digite um codigo valido: ');
    const produtoCarrinho = produto.find((idProduto) => {
      if (idProduto.codigo === Number(codigo)) return idProduto;
    });

    if (produtoCarrinho) {
      const qunatidade = prompt('Digite a quantidade para quer comprar desse produto: ');
      const itemCompra = new ItemCompra(produtoCarrinho.descricao, Number(qunatidade), produtoCarrinho.preco);
      listaItens.push(itemCompra);
    }

    respostaOpcao = prompt('Deseja adicionar outro Produto: 1 - SIM, 9999 - NÂO: ');

    opcao = Number(respostaOpcao);
  }

  const carrinho = new Cariinho(listaItens, 10);
  carrinho.mostraCarrinho();
  console.log('Bye Bye');
}

main();
