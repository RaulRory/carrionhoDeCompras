import { ItemCompra } from './ItemCompra';

describe('Create ItemCompra', () => {
  it('Should able to create a new item of Purchase', () => {
    const items = new ItemCompra('Meu produto de test', 2, 25.5);

    expect(items).toBeInstanceOf(ItemCompra);
    expect(items.qtd).toBe(2);
  });
});
