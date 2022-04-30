import { Produto } from './Produto';

describe('Create Products', () => {
  it('Should able to create a new products', () => {
    const products = new Produto(123, 'Meu produto de test', 25.5);

    expect(products).toBeInstanceOf(Produto);
    expect(products.codigo).toBe(123);
  });
});
