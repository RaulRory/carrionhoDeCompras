import { ItemCompra } from './ItemCompra';

describe('Create ItemCompra', () => {
  it('Should able to create a new item of Purchase', () => {
    const items = new ItemCompra('Meu produto de test', 2, 25.5);

    expect(items).toBeInstanceOf(ItemCompra);
    expect(items.qtd).toBe(2);
  });

  it('Should return subtotal of new Item created', () => {
    const items = new ItemCompra('Meu produto de test', 2, 25.5);
    const items2 = new ItemCompra('Meu produto de test', 4, 20.0);

    expect(items.calcSubtotal()).toBe(51.0);
    expect(items2.calcSubtotal()).toBe(80.0);
  });

  it('Must show a string with all products', () => {
    const items = new ItemCompra('Meu produto de test', 2, 25.5);

    expect(items.mostraItem()).toBe(`Descrição: Meu produto de test, Preço: 25.5, Qunatidade: 2, Subtotal: 51`);
  });
});
