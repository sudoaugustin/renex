import { element } from '../src/utils';

test('Check `element` method', () => {
  const conditions = [
    { as: 'p', output: 'p' },
    { as: undefined, output: 'div' },
    { as: '', output: Symbol('react.fragment').toString() },
  ] as const;

  conditions.forEach(({ as, output }) => {
    const { type } = element({ as, children: 'Helloworld' });
    expect(type.toString()).toBe(output);
  });
});
