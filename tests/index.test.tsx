import * as components from '../src';
import { render } from '@testing-library/react';

const props = {
  Memo: { deps: [] },
  State: { initial: '' },
  Effect: { initial: '', callback: () => {} },
};

//@ts-ignore
const names: (keyof typeof props)[] = Object.keys(components);

names.forEach((name) => {
  test(`Check 'as' for ${name}`, async () => {
    const $props = { ...props[name], children: () => '' };
    const Component = components[name];

    //@ts-ignore
    expect(render(<Component as='' {...$props} />).container.innerHTML).toBe('');

    //@ts-ignore
    expect(render(<Component {...$props} />).container.innerHTML).toBe('<div></div>');

    //@ts-ignore
    expect(render(<Component as='p' {...$props} />).container.innerHTML).toBe('<p></p>');
  });
});
