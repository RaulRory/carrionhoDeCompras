import { GerarProduto } from './produto/GerarProduto';
import promptSync from 'prompt-sync';

async function main() {
  const dadosProduto = new GerarProduto();

  const produto = await dadosProduto.criarProduto();
  const prompt = promptSync();
  const resposta = prompt('Digite um codigo valido');

  produto.forEach((idProduto) => {
    if (idProduto.codigo === Number(resposta)) return idProduto;
  });
}

main();
