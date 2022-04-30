import { Cariinho } from './carrinho/Carrinho';
import { GerarProduto } from './produto/GerarProduto';
import { ItemCompra } from './compra/ItemCompra';

import promptSync from 'prompt-sync';

async function main() {
  const dadosProduto = new GerarProduto();

  const produto = await dadosProduto.criarProduto();
  const prompt = promptSync();
  const codigo = prompt('Digite um codigo valido: ');

  const produtoCarrinho = produto.find((idProduto) => {
    if (idProduto.codigo === Number(codigo)) return idProduto;
  });

  if (produtoCarrinho) {
    const qunatidade = prompt('Digite a quantidade para quer comprar desse produto: ');
    const itemCompra = new ItemCompra(produtoCarrinho.descricao, Number(qunatidade), produtoCarrinho.preco);
    const carrinho = new Cariinho([itemCompra], 10);

    carrinho.mostraCarrinho();
    console.log(`O valor da compra é ${carrinho.getTotalCompra()} com os descontos de o valor vai ${carrinho.getValorPagar()}`);
  }

  console.log('Bye Bye');
}

main();
