import { element } from '../src/utils';

test('Check `element` method', () => {
  const conditions = [
    { as: 'div', output: 'div' },
    { as: undefined, output: Symbol('react.fragment').toString() },
  ] as const;

  conditions.forEach(({ as, output }) => {
    const { type } = element({ as, children: 'Helloworld' });
    expect(type.toString()).toBe(output);
  });
});
